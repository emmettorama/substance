---
sidebar_position: 1
---

# Installation

```bash
npm install @emmettorama/substance
```

## Requirements

- React 19+
- Tailwind CSS (the library ships compiled CSS; you don't need Tailwind in your project)

## Setup

### 1. Import the CSS

Import the styles in your app entry point:

```tsx
import '@emmettorama/substance/styles.css';
```

### 2. Add the font (optional)

Substance uses `Inter` by default. Add the Google Font in your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### 3. Start using components

```tsx
import { Button, Input, Label } from '@emmettorama/substance';
```
