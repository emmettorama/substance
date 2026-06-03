---
sidebar_position: 2
---

# Theming

Substance uses CSS custom properties for all design tokens. Override them in your global CSS to customize the look.

## Color Tokens

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... see globals.css for all tokens */
}
```

Each color token is an HSL value (without the `hsl()` wrapper). Example:

```css
:root {
  --primary: 262 83% 58%; /* Purple primary */
}
```

## Border Radius

```css
:root {
  --radius: 0.5rem; /* Default border radius */
}
```

## Dark Mode

Toggle dark mode by adding the `.dark` class to your `<html>` element:

```css
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```
