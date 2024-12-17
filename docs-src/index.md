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
<script type="module" src="https://esm.sh/simple-boost@latest"></script>
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

## Works with NWC or a lightning address

<section class="columns">
  <div>

`<simple-boost>` can be used directly with any NWC wallet or a lightning address

```html
<simple-boost
  address="hello@getalby.com"
></simple-boost>

<simple-boost
  nwc="NWC secret with ONLY make invoice and check invoice permission"
></simple-boost>
```

  </div>
  <div>

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


## Specify amounts in satoshi or fiat currency

<section class="columns">
  <div>

`<simple-boost>` supports any currency by defining the currency and the amount attribute.

```html
<simple-boost-amount currency="eur" address="hello@getalby.com">Pay 1 EUR</simple-boost-amount>
```

  </div>
  <div>

<simple-boost currency="eur" address="hello@getalby.com">Pay 1 EUR</simple-boost>

  </div>
</section>
