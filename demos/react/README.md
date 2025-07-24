# 🪄 SimpleBoost React Wrapper

This guide explains how to use the React wrapper for the `SimpleBoostButton` component in your React application.

---

## 📦 Installation

Before using the component, ensure the package is built and the `dist` directory is available. The React wrapper and required styles are bundled there.

---

## 🚀 Quick Start

Here’s a minimal example showing how to use `SimpleBoostButton` in a React component:

```tsx
import { SimpleBoostButton } from "../../../dist/index";

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

export default App;
````

---

## 🧩 Component Props

| Prop          | Type                                | Description                                             |
| ------------- | ----------------------------------- | ------------------------------------------------------- |
| `address`     | `string`                            | LNURL or Lightning Address to send sats to              |
| `amount`      | `number`                            | Amount to send                                          |
| `memo`        | `string`                            | Optional metadata to include with the transaction       |
| `no-confetti` | `boolean`                           | Set to `true` to disable the success confetti animation |
| `currency`    | `'sats' \| 'usd' \| 'eur' \| 'etc'` | Currency unit to use                                    |
| `onSuccess`   | `(e: Event) => void`                | Callback triggered after a successful payment           |

---




