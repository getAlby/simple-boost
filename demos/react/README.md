# ⚡ SimpleBoost React Wrapper – Demo App

This is a demo React app for testing the [`simple-boost`](https://www.npmjs.com/package/simple-boost)'s React Wrapper component locally during development.

> **Note:** This is **not the official production setup**.
> It’s meant for testing local changes to the component before publishing.

---

## ✅ Prerequisites

Before running the demo app, make sure the core package is installed and built from the root directory.

1. Navigate to the root of the project:

```bash
cd ../..
```

2. Install dependencies and build the package:

```bash
npm install
npm run build
```

This compiles the `simple-boost` and `simple-boost-react` package into the `dist/` folder.

---

## 📦 Setup the Demo App

1. Move back into the React demo folder:

```bash
cd demo/react
```

2. Install demo app dependencies:

```bash
npm install
```

---

## ▶️ Running the Demo

Start the React development server:

```bash
npm run dev
```

This will launch a local app showcasing how the `SimpleBoostButton` works with your locally built code.

---

## 🧪 Importing the Local Build

In this demo, the component is imported directly from the local `dist/` directory:

```tsx
import { SimpleBoostButton } from "../../../dist/simple-boost-react";
```

This allows you to test any changes made to the source before publishing.

### Example Usage:

```tsx
function App() {
  return (
    <SimpleBoostButton
      address="hello@getalby.com"
      amount={1}
      currency="sats"
      memo="simple boost test"
      onSuccess={(e) => console.log("Payment succeeded!", e)}
    />
  );
}
```

---

## 🧩 Component Props

| Prop          | Type                                | Description                                         |
| ------------- | ----------------------------------- | --------------------------------------------------- |
| `address`     | `string`                            | LNURL or Lightning Address to send sats to          |
| `amount`      | `number`                            | Amount to send                                      |
| `memo`        | `string`                            | Optional message attached to the transaction        |
| `currency`    | `'sats' \| 'usd' \| 'eur' \| 'etc'` | Currency denomination                               |
| `no-confetti` | `boolean`                           | Disable success confetti animation if set to `true` |
| `onSuccess`   | `(e: Event) => void`                | Callback fired after successful payment             |

---

## 📁 Folder Structure

```
demo/
└── react/
    ├── public/
    ├── src/              # React test app
    ├── dist/             # Built output from root package
    ├── package.json
    ├── ...               # other files
    └── README.md         # ← You are here!
```

---

## 📦 For Production Use

To use `SimpleBoostButton` in a live app, install it from npm:

```bash
npm install simple-boost
```

Then import it like this:

```tsx
import { SimpleBoostButton } from "simple-boost";
```

---

## 🧠 Notes

* This demo is for development purposes only.
* Make sure to rebuild the package (`npm run build`) after making any source code changes.
* If you experience issues with imports, confirm that the `dist/` folder exists and is up to date.

---

Made with ⚡ by the Alby team.


