---
sidebar_position: 1
slug: /
---

# Substance

A React UI component library styled like shadcn/ui, built on **Radix UI** primitives with **Tailwind CSS** and **framer-motion** animations.

## Features

- 🎨 **shadcn/ui aesthetic** — Clean, minimal design with CSS custom properties for theming
- ♿ **Accessible** — Built on Radix UI primitives with full keyboard navigation and ARIA support
- 🎭 **Animated** — Smooth framer-motion transitions on interactive components
- 🌗 **Dark mode** — Full dark mode support via CSS variables
- 📦 **Tree-shakeable** — Import only what you need
- 🔷 **TypeScript** — Strict types for every component prop

## Quick Start

```bash
npm install @emmettorama/substance
```

```tsx
import { Button } from '@emmettorama/substance';
import '@emmettorama/substance/styles.css';

function App() {
  return <Button variant="default">Hello World</Button>;
}
```
