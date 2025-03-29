import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import JSConfetti from 'js-confetti';
import {styles} from './styles.js';
import {LightningAddress, fiat, Invoice} from '@getalby/lightning-tools';
import {webln} from '@getalby/sdk';
import {launchPaymentModal} from '@getalby/bitcoin-connect';

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
  @property({type: String})
  address = '';
  /**
   * The recipient NWC.
   */
  @property({type: String})
  nwc = '';
  /**
   * The payment amount. Either denominated in sats (default) or in a defined fiat currency.
   */
  @property({type: Number})
  amount = 100;
  /**
   * The payment description.
   */
  @property({type: String})
  memo = '';
  /**
   * Currency of the payment. Defaults to sats. If a fiat currency (e.g. USD, EUR, etc.) is used the amount will be converted to sats on payment
   */
  @property({type: String})
  currency = 'sats';
  /**
   * Disable the confetti after a payment is sent
   */
  @property({type: Boolean, attribute: 'no-confetti'})
  noConfetti = false;
  /**
   * The button theme. Supported options: alby, default, hey, figma, figma-filled, next, next-filled, bootstrap, bootstrap-filled, gumroad, spotify
   */
  @property({type: String})
  theme = 'default';
  @property({type: Boolean, attribute: false})
  isLoading = false;

  jsConfetti = new JSConfetti();
  _nwcClient: webln.NostrWebLNProvider | null = null;

  constructor() {
    super();
    // if no class is configured we use `default` for the default styles
    if (this.classList.length === 0) {
      this.classList.add('default');
    }

    // Check NWC permissions when the component is created
    this.addEventListener('firstUpdated', () => {
      if (this.nwc) {
        this.checkNwcPermissions();
      }
    });
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
    if (!this.nwc) {
      return null;
    }
    if (this._nwcClient) {
      return this._nwcClient;
    }

    this._nwcClient = new webln.NostrWebLNProvider({
      nostrWalletConnectUrl: this.nwc
    });
    return this._nwcClient;
  }

  private async checkNwcPermissions() {
    if (!this.nwcClient) {
      return;
    }
    
    try {
      await this.nwcClient.enable();
      const info = await this.nwcClient.getInfo();
      
      // Check if the NWC connection has send permission
      if (!info.methods.includes('makeInvoice')) {
        console.error('The NWC connection does not have the required send permission. Please check your NWC connection secret.');
        this.showToastWarning('NWC Error: Missing send permission. Please check your NWC connection secret.');
      }
    } catch (error) {
      console.error('Failed to check NWC permissions:', error);
      this.showToastWarning('NWC Error: Failed to check permissions. Please verify your connection string.');
    }
  }

  private showToastWarning(message: string) {
    // Create toast element
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#ff4d4f';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '4px';
    toast.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    toast.style.zIndex = '1000';
    toast.style.maxWidth = '80%';
    toast.style.textAlign = 'center';
    toast.style.fontSize = '14px';
    toast.textContent = message;
    
    // Add close button
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.style.marginLeft = '10px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.fontSize = '16px';
    closeBtn.onclick = () => document.body.removeChild(toast);
    toast.appendChild(closeBtn);
    
    // Add to document
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 5000);
  }

  async getAmountInSats() {
    if (this.currency === 'sats') {
      return Promise.resolve(this.amount);
    } else {
      return fiat.getSatoshiValue({
        currency: this.currency,
        amount: this.amount,
      });
    }
  }

  private async requestInvoice(args: {amountInSats: number; memo: string}) {
    if (this.nwcClient) {
      await this.nwcClient.enable();
      try {
        const response = await this.nwcClient.makeInvoice({
          amount: args.amountInSats,
          defaultMemo: args.memo,
        });
        return new Invoice({pr: response.paymentRequest});
      } catch (error) {
        console.error('Failed to create invoice with NWC:', error);
        this.showToastWarning('Failed to create invoice. Please check if your NWC connection has the required permissions.');
        throw new Error('Failed to create invoice. Please check if your NWC connection has the required permissions.');
      }
    } else if (this.address) {
      const ln = new LightningAddress(this.address, { proxy: false });
      await ln.fetch();
      return await ln.requestInvoice({
        satoshi: args.amountInSats,
        comment: args.memo,
      });
    } else {
      throw new Error('missing method');
    }
  }

  private onPaid(args: {paymentRequest: string; preimage: string}) {
    this.isLoading = false;
    if (!args.preimage) {
      return;
    }
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

  private checkPayment(
    invoice: Invoice,
    setPaid: (args: {preimage: string | null | undefined}) => void
  ) {
    return setInterval(async () => {
      try {
        if (this.nwcClient) {
          const lookupResponse = await this.nwcClient.lookupInvoice({
            paymentHash: invoice.paymentHash,
          });

          if (lookupResponse.paid) {
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
      } catch (e) {
        console.error('Failed to verify payment', e);
      }
    }, 1000);
  }
  private async requestPayment(args: {amountInSats: number; memo: string}) {
    const invoice = await this.requestInvoice(args);

    if (window.webln) {
      try {
        await window.webln.enable();
        const paymentResponse = await window.webln.sendPayment(
          invoice.paymentRequest
        );
        this.onPaid({
          paymentRequest: invoice.paymentRequest,
          preimage: paymentResponse.preimage as string,
        });
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
    } else {
      const {setPaid} = launchPaymentModal({
        invoice: invoice.paymentRequest,
        onPaid: (args: {preimage: string}) => {
          clearInterval(checkPaymentInterval);
          this.onPaid({
            paymentRequest: invoice.paymentRequest,
            preimage: args.preimage,
          });
        },
        onCancelled: () => {
          clearInterval(checkPaymentInterval);
          this.isLoading = false;
        },
      });
      const checkPaymentInterval = this.checkPayment(invoice, (args) => {
        if (args.preimage) {
          setPaid({preimage: args.preimage});
        }
      });
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

    this.requestPayment({amountInSats, memo: this.memo});
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
