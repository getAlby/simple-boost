# simple-boost - The Lightning Payment Button

A web component button to trigger a WebLN payment request. The easiest and fastest way for your website visitors to send you sats.

Lightning invoices can either be automatically be generates through a LUNRL-pay Lightning Address or the payment can be sent as a keysend payment.

## Demo and Documentation

Have a look at the [docs](https://getalby.github.io/simple-boost/) and [examples](https://getalby.github.io/simple-boost/examples/).

## Development setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Dev Server

This project uses [Vite](https://vitejs.dev/) for local development and preview. Vite provides fast hot-module reloading (HMR), resolves Node-style "bare" imports out of the box, and serves your source files without requiring a separate build step. Unlike Web Dev Server, Vite does not automatically add legacy polyfills — it assumes a modern browser baseline. For more details, see the [Vite documentation](https://vitejs.dev/).

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

## Docs

Generate the `/docs` website from the `docs-src` sources.

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

The site will usually be served at http://localhost:8000.
