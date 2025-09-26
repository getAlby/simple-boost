---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<simple-boost address="hello@getalby.com" amount="2100" currency="sats">
  Support our work
</simple-boost>

<h3>HTML</h3>

```html
<script type="module" src="https://esm.sh/simple-boost@latest"></script>
<simple-boost address="hello@getalby.com" amount="2100" currency="sats">
  Support our work
</simple-boost>
```

<h3>React</h3>

```jsx
import { SimpleBoostButton } from "simple-boost/react"
function Boost() {
  return (
      <SimpleBoostButton
        address="hello@getalby.com"
        amount={2100}
        currency="sats">
         Support our work 
      </SimpleBoostButton>
  )
}
export default Boost
```
