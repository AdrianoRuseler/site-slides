---
routerMode: hash
theme: default
background: https://cover.sli.dev
title: Slidev Built-in Layouts Demo
info: Demonstration of all built-in Slidev layouts
---

# Slidev Built-in Layouts

Demonstration of every built-in layout

<div class="pt-8">

Author: Your Name

</div>

<MyFooter />

---
layout: cover
---

# Slidev Built-in Layouts

Demonstration of every built-in layout

<div class="pt-8">

Author: Your Name

</div>

<MyFooter />

---
layout: intro
---

# Intro

This is the **intro** layout.

- Presentation overview
- Author information
- Agenda

<MyFooter />

---
layout: default
---

# Default

The standard layout used by most slides.

- Bullet one
- Bullet two
- Bullet three

<MyFooter />

---
layout: center
---

# Center

Everything is centered.

Perfect for short messages.

<MyFooter />

---
layout: section
---

# Section

## New Chapter


---
layout: statement
---

# Slidev makes presentations enjoyable.


---
layout: fact
---

## 95%

Developers enjoy writing presentations in Markdown.

---
layout: quote
---

> Simplicity is the ultimate sophistication.

— Leonardo da Vinci


---
layout: two-cols
---

# Two Columns

Left column content.

- Item A
- Item B
- Item C

::right::

# Right Column

```ts
function hello() {
  console.log("Slidev")
}
```

---
layout: two-cols-header
---

# Two Columns with Header

This top section spans the entire width.

::left::

## Left

- Apple
- Orange
- Banana

::right::

## Right

| Name | Value |
|------|------:|
| A | 10 |
| B | 20 |



---
layout: image
image: https://picsum.photos/1600/900
backgroundSize: contain
---

# Some text

---
layout: image-left
image: https://picsum.photos/800/900
---

# Image Left

The image occupies the left side.

- Nice for product demos
- Tutorials
- Documentation


---
layout: image-right
image: https://picsum.photos/801/900
---

# Image Right

Content stays on the left.

```yaml
layout: image-right
```

---
layout: iframe
url: https://sli.dev
---


---
layout: iframe-left
url: https://sli.dev
---

# IFrame Left

The webpage appears on the left.

Useful for live websites.


---
layout: iframe-right
url: https://sli.dev
---

# IFrame Right

Content on the left.

Website on the right.


---
layout: full
---

# Full Layout

<div class="grid grid-cols-3 gap-4 pt-8">

<div class="border rounded p-4">

### Card 1

Lorem ipsum.

</div>

<div class="border rounded p-4">

### Card 2

Lorem ipsum.

</div>

<div class="border rounded p-4">

### Card 3

Lorem ipsum.

</div>

</div>


---
layout: none
---

<div style="padding:80px">

<h1>No Layout</h1>

<p>
No styling is applied by Slidev.
You have complete control over the HTML and CSS.
</p>

<div style="margin-top:40px;border:2px dashed gray;padding:20px">
Custom content
</div>

</div>


---
layout: end
---

# Thank You!

Questions?

GitHub: https://github.com/slidevjs/slidev
