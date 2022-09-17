---
layout: page.11ty.cjs
title: <simple-boost> ⌲ Home
---

# &lt;simple-boost>

`<simple-boost>` is the lightning boost button for your website. It is the fastest and easiest way to receive tips and allows your visitors to send support with one simple click.

## As easy as HTML

<section class="columns">
  <div>

`<simple-boost>` is just an HTML element configurable with plain HTML attributes. You can it anywhere you can use HTML!

```html
<simple-boost amount="2100" address="hello@getalby.com"></simple-boost>
```

  </div>
  <div>

<simple-boost amount="2100" address="hello@getalby.com"></simple-boost>

  </div>
</section>

## Use your content

`<simple-boost>` supports any button content. Use it as any other HTML button.

<section class="columns">
  <div>

```html
<simple-boost amount="2100" address="hello@getalby.com" theme="gumroad"
  >Support my work!</simple-boost
>
```

  </div>
  <div>

<simple-boost amount="2100" address="hello@getalby.com" theme="gumroad">Support my work!</simple-boost>

  </div>
</section>

## Predefined button themes

`<simple-boost>` comes with a list of themes and can be configured to match your style.

Possible theme options: default, hey, figma, figma-filled, next, next-filled, bootstrap, bootstrap-filled, gumroad

<section class="columns">
  <div>

```html
<simple-boost theme="hey" address="hello@getalby.com"></simple-boost>
<simple-boost theme="bootstrap" address="hello@getalby.com"></simple-boost>
<simple-boost
  theme="gumroad"
  currency="usd"
  amount="1"
  address="hello@getalby.com"
></simple-boost>
<simple-boost
  theme="figma-filled"
  address="hello@getalby.com"
  currency="eur"
  amount="1"
></simple-boost>
```

  </div>
  <div>

<simple-boost theme="hey" address="hello@getalby.com"></simple-boost>
<simple-boost theme="bootstrap" address="hello@getalby.com"></simple-boost>
<simple-boost theme="gumroad" currency="USD" amount="1" address="hello@getalby.com"></simple-boost>
<simple-boost theme="figma-filled" currency="eur" amount="1" address="hello@getalby.com"></simple-boost>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<simple-boost>` can be configured with attributes in plain HTML. See API for details.

```html
<simple-boost
  address="your-node-key"
  custom-key="..."
  custom-value="..."
></simple-boost>
```

  </div>
  <div>

<simple-boost method="keysend" address="030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3" custom-key="696969" custom-value="3wQCCrfOAMYNzOh1sL05">Supports keysend</simple-boost>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<simple-boost>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;simple-boost&gt;</h2>
    <simple-boost .address=${address}></simple-boost>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;simple-boost&gt;</h2>
<simple-boost address="hello@getalby.com"></simple-boost>

  </div>
</section>
