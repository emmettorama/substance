---
sidebar_position: 3
---

# Usage

## Importing Components

All components are exported from the main entry point:

```tsx
import {
  Button,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Separator,
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Sheet,
  SheetTrigger,
  SheetContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Input,
  Checkbox,
  Textarea,
  ToastProvider,
  Toaster,
  useToast,
  toast,
  cn,
} from '@emmettorama/substance';
```

## Tree-shaking

You can also import individual components for smaller bundles:

```tsx
import { Button } from '@emmettorama/substance/components/button';
```

## The `cn` Utility

Substance exports a `cn()` helper (combines `clsx` + `tailwind-merge`) you can use:

```tsx
import { cn } from '@emmettorama/substance';

const className = cn('px-4 py-2', isActive && 'bg-primary');
```
