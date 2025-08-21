---
templateEngineOverride: md
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ Custom Style
tags: example
name: Styles
description: Custom Styles
---

You can use one of the pre-defined themes or completely custom style your boost button.

Possible themes are: alby, hey, figma, figma-filled, next, next-filled, bootstrap, bootstrap-filled, gumroad, spotify

To customize the style use your own CSS class or style.

<simple-boost class="hey" address="hello@getalby.com">
  hey boooooost!
</simple-boost>
<simple-boost class="spotify" address="hello@getalby.com">
  Spotify boooooost!
</simple-boost>
<simple-boost class="my-boost" style="border:1px solid red; padding:5px" address="hello@getalby.com"></simple-boost>

<h3>HTML</h3>

```html
<simple-boost class="hey" address="hello@getalby.com">
  boooooost!
</simple-boost>
<simple-boost class="spotify" address="hello@getalby.com">
  boooooost!
</simple-boost>
<simple-boost
  class="my-boost"
  style="border:1px solid red; padding:5px"
  address="hello@getalby.com"
></simple-boost>
```

<h3>React</h3>

```jsx
<SimpleBoostButton className="hey" address="hello@getalby.com">
  boooooost!
</SimpleBoostButton>
<SimpleBoostButton className="spotify" address="hello@getalby.com">
  boooooost!
</SimpleBoostButton>
<SimpleBoostButton
  className="my-boost"
  style={{ border: "1px solid red", padding: "5px" }}
  address="hello@getalby.com"
/>
```
