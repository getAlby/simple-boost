---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ JavaScript Events
tags: example
name: Events
description: JavaScript Events
---

Subscibe to the `success` event to get notified once a user has paid and execute custom code.

<simple-boost id="boost" no-confetti="true" address="hello@getalby.com">
  drop 100 sats
</simple-boost>
<script>
  document.getElementById('boost').addEventListener('success', (e) => {
    console.log(e);
    alert(`Thanks for the sats! Payment preimage: ${e.detail.preimage}`);
  });
</script>

<h3>HTML</h3>

```html
<simple-boost id="boost" no-confetti="true" address="hello@getalby.com">
  drop 100 sats
</simple-boost>
<script>
  document.getElementById('boost').addEventListener('success', (e) => {
    console.log(e);
    alert(`Thanks for the sats! Payment preimage: ${e.detail.preimage}`);
  });
</script>
```
