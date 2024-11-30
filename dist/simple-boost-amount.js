var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SimpleBoost } from './simple-boost';
/**
 * The simple-boost- tipping component with amount input
 *
 * @fires success - Indicates when a payment was sent
 * @slot - This element has a slot
 * @csspart button - The button
 */
let SimpleBoostAmount = class SimpleBoostAmount extends SimpleBoost {
    _inputChanged(e) {
        const value = e.target.value;
        this.amount = parseFloat(value) || this.amount;
    }
    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }
    render() {
        return html `
      <div class="simple-boost-button">
        <input
          type="text"
          class="simple-boost-amount-input"
          size="3"
          value="${this.amount}"
          @keyup=${this.handleKeyUp}
          @input=${this._inputChanged}
        />
        <div class="inline" @click=${this.clickHandler}>
          <slot>${this.currency} Boost</slot>
        </div>
        <div class="inline">
          ${this.isLoading
            ? html `
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
};
SimpleBoostAmount = __decorate([
    customElement('simple-boost-amount')
], SimpleBoostAmount);
export { SimpleBoostAmount };
