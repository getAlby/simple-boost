---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ No Confetti
tags: example
name: No-Confetti
description: Disable confetti
---

By default there will be confetti when a user sends a payment. You can disable this with the `no-confetti` attribute.

<simple-boost no-confetti="1" class="hey" address="hello@getalby.com"></simple-boost>

<h3>HTML</h3>

```html
<simple-boost
  no-confetti="1"
  class="hey"
  address="hello@getalby.com"
  amount="2100"
></simple-boost>
```
