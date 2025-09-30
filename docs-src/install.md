---
layout: page.11ty.cjs
title: <simple-boost> ⌲ Install
---

# Install

`<simple-boost>` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

The most simple installation is just to load it from the CD:

```html
<script type="module" src="https://esm.sh/simple-boost@latest"></script>
```

and then use the `<simple-boost address="..."></simple-boost>` tag as described in the examples.

If you want to load the JS locally you can use the dist file from [GitHub](https://github.com/getAlby/simple-boost/tree/main/dist) or install it via NPM.

## Library / Framework
Install the package:

```bash
npm install simple-boost
```

The **Simple Boost** package exposes a React-friendly component called `SimpleBoostButton` that integrates seamlessly with React and Next.js projects.

---

### React / Next.js Setup

⚠️ **Important: Required Packages**
The React wrapper depends on the following packages:

- `react`
- `react-dom`
- `@lit/react`

Install them with:

```bash
npm install react react-dom @lit/react
```

> The React wrapper will **not work in non-React projects**.

---

### Example Usage (React)

```jsx
import {SimpleBoostButton} from 'simple-boost/react';

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

---

### Example Usage (Next.js 13+ with App Router)

Since this component relies on client-side rendering, remember to add `"use client"` at the top of your file:

```jsx
'use client';

import {SimpleBoostButton} from 'simple-boost/react';

export default function Boost() {
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
```

## CDN

npm CDNs like [esm.sh]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

---

### HTML

```html
<script type="module" src="https://esm.sh/simple-boost@latest"></script>
```

### JavaScript

```js
import {SimpleBoost} from 'https://esm.sh/simple-boost@latest';
```

## Code

You find the [source code over at GitHub](https://github.com/getAlby/simple-boost)
