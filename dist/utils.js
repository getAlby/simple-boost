export const linkFallback = (paymentRequest) => {
    const src = `lightning:${paymentRequest}`;
    const link = document.createElement('a');
    link.href = src;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
export const requestInvoice = async (lnurl, sats) => {
    let response;
    try {
        response = await requestInvoiceFromLnurl(lnurl, sats);
    }
    catch (e) {
        console.error(e);
        response = await requestInvoiceWithProxy(lnurl, sats);
    }
    return response;
};
export const requestInvoiceWithProxy = (lnurl, sats) => {
    const url = `https://embed.twentyuno.net/invoice?to=${lnurl}&amount=${sats}&comment=`;
    return fetch(url)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Network response was not OK');
        }
    })
        .then((response) => {
        return { pr: response.payment_request };
    });
};
export const requestInvoiceFromLnurl = (lnurl, sats) => {
    let url = lnurl;
    if (lnurl.match(/@/)) {
        const [user, host] = lnurl.split('@');
        url = `https://${host}/.well-known/lnurlp/${user}`;
    }
    return fetch(url)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Network response was not OK');
        }
    })
        .then((lnurl) => {
        const url = new URL(lnurl.callback);
        const amount = sats * 1000;
        url.searchParams.set('amount', amount.toString());
        return fetch(url.toString()).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Invoice creation failed');
            }
        });
    });
};
