export declare const linkFallback: (paymentRequest: string) => void;
export declare const requestInvoice: (lnurl: string, sats: number) => Promise<{
    pr: string;
}>;
export declare const requestInvoiceWithProxy: (lnurl: string, sats: number) => Promise<{
    pr: string;
}>;
export declare const requestInvoiceFromLnurl: (lnurl: string, sats: number) => Promise<{
    pr: string;
}>;
