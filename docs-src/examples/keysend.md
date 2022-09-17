---
layout: example.11ty.cjs
title: <simple-boost> ⌲ Examples ⌲ Keysend
tags: example
name: Keysend
description: Keysend
---

Keysend payments are widely used in the podcasting Value 4 Value community. You can use simple-boost with the same keysend information.

<simple-boost
method="keysend"
address="030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3"
custom-key="696969"
custom-value="3wQCCrfOAMYNzOh1sL05"
amount="2000"
theme="bootstrap-filled">Boost!</simple-boost>

<h3>HTML</h3>

```html
<simple-boost
  address="node-pub-key"
  custom-key="..."
  custom-value="..."
  theme="bootstrap-filled"
  >Boost!</simple-boost
>
```
