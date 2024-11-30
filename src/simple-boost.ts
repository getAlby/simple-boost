import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import JSConfetti from 'js-confetti';
import {styles} from './styles.js';
import { LightningAddress, fiat, Invoice } from "@getalby/lightning-tools";
import { webln } from "@getalby/sdk";
import {launchPaymentModal} from '@getalby/bitcoin-connect';

declare global {
  interface Window {
    webln: any;
  }
}

/**
 * The simple-boost tipping component
 *
 * @fires success - Indicates when a payment was sent
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('simple-boost')
export class SimpleBoost extends LitElement {
  static override styles = styles;

  /**
   * The recipient. Either a LNURL-pay/Lightning Address or a node pubkey
   */
  @property({ type: String })
  address = '';
  /**
   * The recipient NWC.
   */
  @property({ type: String })
  nwc = '';
  /**
   * The payment amount. Either denominated in sats (default) or in a defined fiat currency.
   */
  @property({ type: Number })
  amount = 100;
  /**
   * The payment description.
   */
  @property({ type: String })
  memo = "";
  /**
   * Currency of the payment. Defaults to sats. If a fiat currency (e.g. USD, EUR, etc.) is used the amount will be converted to sats on payment
   */
  @property({ type: String })
  currency = 'sats';
  /**
   * Disable the confetti after a payment is sent
   */
  @property({ type: Boolean, attribute: 'no-confetti' })
  noConfetti = false;
  /**
   * The button theme. Supported options: alby, default, hey, figma, figma-filled, next, next-filled, bootstrap, bootstrap-filled, gumroad, spotify
   */
  @property({ type: String })
  theme = 'default';
  @property({ type: Boolean, attribute: false })
  isLoading = false;

  jsConfetti = new JSConfetti();
  _nwcClient: webln.NostrWebLNProvider | null = null;

  constructor() {
    super();
    // if no class is configured we use `default` for the default styles
    if (this.classList.length === 0) {
      this.classList.add('default');
    }

    //this.addEventListener('click', this.clickHandler);
  }

  get formattedAmount() {
    if (this.currency === 'sats') {
      return `${this.amount} sats`;
    }
    const locale = navigator.language;
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: this.currency,
    });
    return formatter.format(this.amount);
  }

  private get nwcClient() {
    if (!this.nwc) { return null; }
    if (this._nwcClient) { return this._nwcClient }

    const nwcUrl = atob(this.nwc);
    this._nwcClient = new webln.NostrWebLNProvider({
      nostrWalletConnectUrl: nwcUrl,
    });
    return this._nwcClient;
  }

  async getAmountInSats() {
    if (this.currency === 'sats') {
      return Promise.resolve(this.amount);
    } else {
      return fiat.getSatoshiValue({ currency: this.currency, amount: this.amount });
    }
  }

  private isWeblnSupported() {
    return !!window.webln;
  }

  private async requestInvoice(args: { amountInSats: number, memo: string }) {
    if (this.nwcClient) {
      await this.nwcClient.enable();
      const response = await this.nwcClient.makeInvoice({
        amount: args.amountInSats,
        memo: args.memo
      });
      return new Invoice({ pr: response.paymentRequest });
    } else if (this.address) {
      const ln = new LightningAddress(this.address);
      await ln.fetch();
      return await ln.requestInvoice({ satoshi: args.amountInSats, comment: args.memo });
    } else {
      throw new Error("missing method");
    }
  }

  private onPaid(args: { paymentRequest: string, preimage: string }) {
    this.isLoading = false;
    if (!args.preimage) { return; }
    if (!this.noConfetti) {
      this.jsConfetti.addConfetti();
    }
    this.dispatchEvent(
      new CustomEvent('success', {
        detail: {
          pr: args.paymentRequest,
          preimage: args.preimage,
        },
      })
    );
  }

  private checkPayment(invoice: Invoice, setPaid: (arge: { preimage: string|null } ) => void) {
    return setInterval(async () => {
      try {
        if (this.nwcClient) {
          const lookupResponse = await this.nwcClient.lookupInvoice({ paymentHash: invoice.paymentHash });

          if(lookupResponse.paid) {
            setPaid({
              preimage: lookupResponse.preimage,
            });
          }
        } else {
          const paid = await invoice.isPaid();
          if (paid) {
            setPaid({
              preimage: invoice.preimage,
            });
          }
        }
      } catch(e) {
        console.error("Failed to verify payment", e);
      }
    }, 1000);
  }
  private async requestPayment(args: { amountInSats: number, memo: string }) {
    const invoice = await this.requestInvoice(args);

    if (this.isWeblnSupported()) {
      try {
        await window.webln.enable();
        const paymentResponse = await window.webln.sendPayment(invoice.paymentRequest);
        this.onPaid({ paymentRequest: invoice.paymentRequest, preimage: paymentResponse.preimage as string });
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
    } else {
      const { setPaid } = launchPaymentModal({
        invoice: invoice.paymentRequest,
        onPaid: (args: { preimage: string }) => {
          clearInterval(checkPaymentInterval);
          this.onPaid({paymentRequest: invoice.paymentRequest, preimage: args.preimage })
        },
        onCancelled: () => {
          clearInterval(checkPaymentInterval);
          this.isLoading = false;
        }
      });
      const checkPaymentInterval = this.checkPayment(invoice, setPaid)
    }
  }

  clickHandler(e: MouseEvent) {
    e.preventDefault();
    this.handleSubmit();
  }
  async handleSubmit() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    let amountInSats;
    try {
      amountInSats = await this.getAmountInSats();
    } catch (e) {
      console.error(e);
      alert(`Could not fetch invoice`);
      return;
    }

    this.requestPayment({ amountInSats, memo: this.memo })
  }

  override render() {
    return html`
      <div class="simple-boost-button" @click="${this.clickHandler}">
        <div class="inline">
          <slot>Boost ${this.formattedAmount}</slot>
        </div>
        <div class="inline">
          ${this.isLoading
            ? html`
                <i
                  aria-label="icon: loading"
                  class="simple-boost-icon simple-boost-icon-loading"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    class="simple-boost-icon-spin"
                    data-icon="loading"
                    width="0.9em"
                    height="0.9em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                    ></path>
                  </svg>
                </i>
              `
            : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-boost': SimpleBoost;
  }
}
