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

## Simply loadable from the CDN

<section class="columns">
  <div>

`<simple-boost>` is easy to add on any website. The easiest is to load from the CDN:

```html
<script type="module" src="https://unpkg.com/simple-boost?module"></script>
<simple-boost
  amount="0.2"
  currency="eur"
  class="spotify"
  address="hello@getalby.com"
></simple-boost>
```

  </div>
  <div>

<simple-boost amount="0.2" currency="eur" class="spotify" address="hello@getalby.com"></simple-boost>

  </div>
</section>

## Highly customizable to match your text and style

`<simple-boost>` supports any button content and can easily be customized (see themes). You can use it as any other HTML button.

<section class="columns">
  <div>

```html
<simple-boost
  style="border:1px solid red; padding: 5px"
  class="my-boost"
  amount="2100"
  address="hello@getalby.com"
  >Support my work!</simple-boost</simple-boost>
```

  </div>
  <div>

<simple-boost
    style="border:1px solid red; padding: 5px"
    class="my-boost"
    amount="2100"
    address="hello@getalby.com"
    >Support my work!</simple-boost>

  </div>
</section>

## Predefined button themes

`<simple-boost>` comes with a list of themes and can be configured to match your style.

Possible theme options: alby, hey, figma, figma-filled, next, next-filled, bootstrap, bootstrap-filled, gumroad, spotify

If the themes do not fit your style then simply customized it with your own style.

<section class="columns">
  <div>

```html
<simple-boost class="hey" address="hello@getalby.com"></simple-boost>
<simple-boost class="bootstrap" address="hello@getalby.com"></simple-boost>
<simple-boost
  class="gumroad"
  currency="usd"
  amount="1"
  address="hello@getalby.com"
></simple-boost>
<simple-boost
  class="figma-filled"
  address="hello@getalby.com"
  currency="eur"
  amount="1"
></simple-boost>
```

  </div>
  <div>

<simple-boost class="hey" address="hello@getalby.com"></simple-boost>
<simple-boost class="bootstrap" address="hello@getalby.com"></simple-boost>
<simple-boost class="gumroad" currency="USD" amount="1" address="hello@getalby.com"></simple-boost>
<simple-boost class="figma-filled" currency="eur" amount="1" address="hello@getalby.com"></simple-boost>

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
