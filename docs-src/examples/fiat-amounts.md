---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ Fiat amounts
tags: example
name: Fiat Amoutns
description: Fiat amounts
---

You can define the amounts in fiat currency (e.g. usd, eur, gbp, etc.) The amount will be converted on the fly to satoshis to generate the lightning invoice.

<simple-boost currency="usd" amount="5" theme="gumroad" address="hello@getalby.com"></simple-boost>

<h3>HTML</h3>

```html
<simple-boost
  currency="usd"
  amount="5"
  theme="gumroad"
  address="hello@getalby.com"
></simple-boost>
```
