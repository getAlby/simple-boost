---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ With NWC wallet
tags: example
name: NWC
description: Support for any NWC wallet
---

Simply receive boosts to any wallet that supports the [NWC protocol](https://nwc.dev).

Use a NWC wallet set the NWC connection secret in the `nwc` attribute.

<simple-boost nwc="nostr+walletconnect://dc7793a661a256ccc0f01c527c776e659048c36a58d2218d9d8a93dcb7348d1c?relay=wss://relay.albylabs.com&secret=a4a5ba4d7f4b03b9173729c3b80da90e7efb28ae5bd124d17a1cbfe3bc7241a5&lud16=reddust43292@getalby.com" class="bootstrap"></simple-boost>

<h3>HTML</h3>

```html
<simple-boost
  class="bootstrap"
  nwc="nostr+walletconnect://...."
></simple-boost>
```

<h3>React</h3>

```jsx
<SimpleBoostButton
  className="bootstrap"
  nwc="nostr+walletconnect://...."
/>
```
