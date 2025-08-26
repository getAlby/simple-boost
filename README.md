# simple-boost – The Lightning Payment Button

A web component button to trigger a WebLN payment request. The easiest and fastest way for your website visitors to send you sats.

Lightning invoices can either be automatically generated through a LNURL-pay Lightning Address or the payment can be sent as a keysend payment.

---

## 🚀 Usage

### HTML / Web Component

Include the script and drop the `<simple-boost>` tag anywhere on your page:

```html
<script type="module" src="https://esm.sh/simple-boost@latest"></script>

<simple-boost 
  address="hello@getalby.com" 
  amount="2100" 
  currency="sats">
  Support our work
</simple-boost>
```

This works without React or any framework — just native Web Components.

---

### React

If you’re using React, you can import the pre-built wrapper:
> **Note:** This requires you to have **React** installed in your project (`react` and `react-dom`).  
> The React wrapper won’t work in a non-React project.

```jsx
import { SimpleBoostButton } from "simple-boost/react";

function Boost() {
  return (
    <SimpleBoostButton
      address="hello@getalby.com"
      amount={2100}
      currency="sats"
    >
      Support our work
    </SimpleBoostButton>
  );
}

export default Boost;
```

This uses the same web component under the hood, but wrapped for React via `@lit/react`.

---

## Demo and Documentation

* [Documentation](https://getalby.github.io/simple-boost/)
* [Examples](https://getalby.github.io/simple-boost/examples/)

---

## Development Setup

Install dependencies:

```bash
npm i
```

### Build

Compile the TypeScript sources:

```bash
npm run build
```

Watch for changes:

```bash
npm run build:watch
```

### Dev Server

Run local dev server with [Vite](https://vitejs.dev/):

```bash
npm run serve
```

Open: [http://localhost:8000/dev/index.html](http://localhost:8000/dev/index.html)

For production mode:

```bash
npm run serve:prod
```

---

## Documentation Site

Generate docs:

```bash
npm run docs
```

Serve docs locally:

```bash
npm run docs:serve
```

Docs will usually be served at: [http://localhost:8000](http://localhost:8000)


## Credits

Built with ⚡ by the [Alby](https://getalby.com) team and contributors.