---
routerMode: hash
theme: default
title: UnoCSS Showcase
---

# UnoCSS Showcase

Slidev comes with **UnoCSS** built-in. Features demonstrated:

- Typography
- Colors
- Flexbox
- Grid
- Spacing
- Borders
- Shadows
- Effects
- Gradients
- Responsive utilities
- Hover animations

---

# Typography

<div class="space-y-4">

<p class="text-5xl font-bold">
Heading 1
</p>

<p class="text-4xl font-semibold">
Heading 2
</p>

<p class="text-3xl font-medium">
Heading 3
</p>

<p class="text-xl italic text-gray-500">
Italic Text
</p>

<p class="text-lg underline decoration-red-500">
Underline
</p>

<p class="tracking-widest uppercase">
Letter Spacing
</p>


</div>

<Link to="12">Go to slide 12</Link>

---

# Colors

<div class="grid grid-cols-4 gap-4">

<div class="bg-red-400 text-white p-4 rounded">
Red
</div>

<div class="bg-orange-500 text-white p-4 rounded">
Orange
</div>

<div class="bg-yellow-400 p-4 rounded">
Yellow
</div>

<div class="bg-green-500 text-white p-4 rounded">
Green
</div>

<div class="bg-blue-500 text-white p-4 rounded">
Blue
</div>

<div class="bg-indigo-500 text-white p-4 rounded">
Indigo
</div>

<div class="bg-purple-500 text-white p-4 rounded">
Purple
</div>

<div class="bg-pink-500 text-white p-4 rounded">
Pink
</div>

</div>

---

# Background Gradients

<div class="space-y-4">

<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
Blue → Purple
</div>

<div class="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 p-6 rounded-xl">
Rainbow
</div>

<div class="bg-gradient-to-br from-slate-900 to-cyan-500 text-white p-6 rounded-xl">
Dark Theme
</div>

</div>

---

# Flexbox

<div class="flex justify-between items-center bg-gray-100 p-6 rounded">

<div class="bg-red-400 p-4 rounded">
One
</div>

<div class="bg-green-400 p-4 rounded">
Two
</div>

<div class="bg-blue-400 p-4 rounded">
Three
</div>

</div>

---

# Grid

<div class="grid grid-cols-3 gap-4">

<div class="bg-blue-100 p-4 rounded">1</div>
<div class="bg-blue-100 p-4 rounded">2</div>
<div class="bg-blue-100 p-4 rounded">3</div>
<div class="bg-blue-100 p-4 rounded">4</div>
<div class="bg-blue-100 p-4 rounded">5</div>
<div class="bg-blue-100 p-4 rounded">6</div>

</div>

---

# Cards

<div class="grid grid-cols-3 gap-6">

<div class="rounded-xl shadow-lg border p-5">

## Card A

Simple card

</div>

<div class="rounded-xl shadow-xl border p-5">

## Card B

Larger shadow

</div>

<div class="rounded-xl shadow-2xl border p-5">

## Card C

Largest shadow

</div>

</div>

---

# Buttons

<div class="flex gap-4 flex-wrap">

<button class="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
Primary
</button>

<button class="px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700">
Success
</button>

<button class="px-5 py-2 rounded bg-red-600 text-white hover:bg-red-700">
Danger
</button>

<button class="px-5 py-2 rounded border hover:bg-gray-100">
Outline
</button>

</div>

---

# Borders

<div class="grid grid-cols-2 gap-6">

<div class="border p-6 rounded">
Border
</div>

<div class="border-4 border-blue-500 rounded-xl p-6">
Thick Border
</div>

<div class="border-l-8 border-green-500 p-6">
Left Border
</div>

<div class="border-dashed border-2 p-6">
Dashed
</div>

</div>

---

# Spacing

<div class="space-y-4">

<div class="bg-blue-100 p-2">p-2</div>

<div class="bg-blue-200 p-4">p-4</div>

<div class="bg-blue-300 p-8">p-8</div>

<div class="bg-blue-400 p-12 text-white">p-12</div>

</div>

---

# Effects

<div class="flex gap-8">

<div class="p-8 rounded shadow hover:shadow-xl transition">
Hover Shadow
</div>

<div class="p-8 rounded bg-blue-500 text-white hover:scale-110 transition">
Scale
</div>

<div class="p-8 rounded bg-green-500 text-white hover:rotate-3 transition">
Rotate
</div>

</div>

---

# Opacity & Blur

<div class="relative h-60 rounded overflow-hidden">

<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>

<div class="absolute inset-0 backdrop-blur-sm"></div>

<div class="relative p-8 text-white">

# Glass Effect

Lorem ipsum dolor sit amet.

</div>

</div>

---

# Responsive

<div class="text-center">

<div class="bg-red-500 md:bg-blue-500 lg:bg-green-500 text-white rounded p-8">

Resize the browser

Small → Red

Medium → Blue

Large → Green

</div>

</div>

---

# Dark Card

<div class="bg-slate-900 text-white rounded-xl p-8 shadow-xl">

# Modern UI

- Rounded
- Shadow
- Good contrast
- Responsive

</div>

---

# Combining Utilities

<div
class="
grid
grid-cols-2
gap-6
bg-gradient-to-r
from-indigo-600
to-purple-700
rounded-2xl
shadow-2xl
p-8
text-white
">

<div>

# Left

Modern layout

</div>

<div class="flex items-center justify-center">

<div class="bg-white text-black rounded-xl p-6 shadow-lg">

Centered Card

</div>

</div>

</div>

---

# Utility Cheat Sheet

| Category | Examples |
|-----------|----------|
| Layout | flex, grid, block, inline |
| Spacing | p-4, px-6, m-4, gap-4 |
| Typography | text-xl, font-bold, italic |
| Colors | bg-blue-500, text-red-500 |
| Borders | border, rounded-xl |
| Shadow | shadow, shadow-xl |
| Size | w-full, h-48 |
| Position | relative, absolute |
| Effects | scale-110, rotate-3 |
| Animation | transition, duration-300 |

---

# Thank You

Slidev ❤️ UnoCSS
