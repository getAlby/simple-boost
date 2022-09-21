---
layout: page.11ty.cjs
title: <simple-boost> ⌲ Install
---

# Install

`<simple-boost>` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

The most simple installation is just to load it from the CD:

```html
<script type="module" src="https://unpkg.com/simple-boost?module"></script>
```

and then use the `<simple-boost address="..."></simple-boost>` tag as described in the examples.

If you want to load the JS locally you can use the dist file from [GitHub](https://github.com/getAlby/simple-boost/tree/main/dist) or install it via NPM.

## Local Installation

```bash
npm i simple-boost
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specifiers to full URLs.

### HTML

```html
<script type="module" src="https://unpkg.com/simple-boost?module"></script>
```

### JavaScript

```html
import {SimpleBoost} from 'https://unpkg.com/simple-boost?module';
```

## Code

You find the [source code over at GitHub](https://github.com/getAlby/simple-boost)
