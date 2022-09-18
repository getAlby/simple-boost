import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import JSConfetti from 'js-confetti';
import {styles} from './styles.js';
import {linkFallback, requestInvoice} from './utils.js';

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
  @property({type: String})
  address = '';
  /**
   * The payment amount. Either denominated in sats (default) or in a defined fiat currency.
   */
  @property({type: Number})
  amount = 100;
  /**
   * Currency of the payment. Defaults to sats. If a fiat currency (e.g. USD, EUR, etc.) is used the amount will be converted to sats on payment
   */
  @property({type: String})
  currency = 'sats';
  /**
   * The lightning payment method to use (lnurl or keysend)
   */
  @property({type: String})
  method = 'lnurl';
  /**
   * The name of a custom record key to send along with the keysend payment. Only used for keysend payments
   */
  @property({type: String, attribute: 'custom-key'})
  customKey = null;
  /**
   * A custom value to pass along with the payment. This is considered the value that belongs to the customKey. Only used for keysend payments
   */
  @property({type: String, attribute: 'custom-value'})
  customValue = null;
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

  constructor() {
    super();
    // if no class is configured we use `default` for the default styles
    if (this.classList.length === 0) {
      this.classList.add('default');
    }
    this.addEventListener('click', this.clickHandler);
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

  async getAmountInSats() {
    if (this.currency === 'sats') {
      return Promise.resolve(this.amount);
    } else {
      return fetch(`https://getalby.com/api/rates/${this.currency}`)
        .then((response) => response.json())
        .then((rate) => {
          const rate_float = rate[this.currency.toUpperCase()].rate_float;
          return (this.amount / rate_float) * 100000000;
        });
    }
  }

  private isWeblnSupported() {
    return !!window.webln;
  }

  private isKeysendSupported() {
    return this.isWeblnSupported() && !!window.webln.keysend;
  }

  private async clickHandler(e: MouseEvent) {
    e.preventDefault();
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
    if (this.method === 'lnurl') {
      const callbackResponse = await requestInvoice(this.address, amountInSats);
      const pr = callbackResponse.pr;
      if (this.isWeblnSupported()) {
        try {
          await window.webln.enable();
          let paymentResponse = await window.webln.sendPayment(pr);
          if (paymentResponse.preimage) {
            if (!this.noConfetti) {
              this.jsConfetti.addConfetti();
            }
            this.dispatchEvent(
              new CustomEvent('success', {
                detail: {
                  pr: callbackResponse.pr,
                  preimage: paymentResponse.preimage,
                },
              })
            );
          }
        } catch (error) {
          this.isLoading = false;
        }
      } else {
        linkFallback(pr);
      }
    } else if (this.method === 'keysend') {
      if (this.isKeysendSupported()) {
        let customRecords = {};
        if (this.customKey && this.customValue) {
          customRecords[this.customKey] = this.customValue;
        }
        try {
          let keysendResponse = await window.webln.keysend({
            destination: this.address,
            amount: amountInSats,
            customRecords: customRecords,
          });
          if (keysendResponse.preimage) {
            if (!this.noConfetti) {
              this.jsConfetti.addConfetti();
            }
            this.dispatchEvent(
              new CustomEvent('success', {
                detail: {
                  preimage: keysendResponse.preimage,
                },
              })
            );
          }
        } catch (error) {
          // something failed
          console.error(error);
        }
      } else {
        alert(
          'A Lightning wallet with WebLN support is required. Please install Alby (https://getalby.com)'
        );
      }
    } else {
      alert('Invalid method');
    }
    this.isLoading = false;
  }

  override render() {
    return html`
      <div class="simple-boost-button">
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
