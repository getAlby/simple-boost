import { SimpleBoost } from './simple-boost';
/**
 * The simple-boost- tipping component with amount input
 *
 * @fires success - Indicates when a payment was sent
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class SimpleBoostAmount extends SimpleBoost {
    _inputChanged(e: Event): void;
    handleKeyUp(event: KeyboardEvent): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'simple-boost-amount': SimpleBoostAmount;
    }
}
