# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BlindPitch** is a premium landing page for a bias-free freelance writing platform. This is a frontend mockup only—no backend functionality is implemented. The unique concept: writers browse opportunities without knowing which publication posted them, and publications review pitches without knowing the writer's identity.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start
```

Open http://localhost:3000 to view the landing page.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Build Tool**: Turbopack (Next.js default)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Fonts**: Inter (sans) + Fraunces (serif) from Google Fonts

## Architecture

### Font System
The app uses a dual-font approach configured in [app/layout.tsx](app/layout.tsx):
- **Inter**: Primary sans-serif font for body text and UI elements (`--font-inter`)
- **Fraunces**: Serif font for headlines and emphasis (`--font-fraunces`)

Both fonts are loaded as CSS variables and applied via the `.font-serif` utility class for serif text.

### Styling Architecture
- **Tailwind v4**: Uses the new `@import "tailwindcss"` syntax in [app/globals.css](app/globals.css)
- **Design tokens**: Custom CSS variables in `:root` for colors, spacing, and border radius
- **Dark mode support**: Pre-configured with `.dark` class variant (not actively used in landing page)
- **Color system**: Uses OKLCH color space for better perceptual uniformity
- **Typography**: Optimized with `text-rendering: optimizeLegibility` and font smoothing

### Component Organization
```
components/
└── ui/              # shadcn/ui components
    ├── button.tsx   # Button with variants: default, outline, ghost
    ├── card.tsx     # Content containers (Card, CardHeader, CardContent, etc.)
    └── badge.tsx    # Labels and tags

lib/
└── utils.ts         # cn() utility for merging Tailwind classes
```

The `cn()` helper (clsx + tailwind-merge) is used throughout for conditional class merging.

### Path Aliases
TypeScript is configured with `@/*` pointing to the root directory. Import components like:
```typescript
import { Button } from "@/components/ui/button";
```

### Landing Page Structure
The main landing page [app/page.tsx](app/page.tsx) is a single-file component with these sections:
1. **Navigation**: Fixed header with glassmorphism backdrop
2. **Hero**: Large headline with mystery publication card visual
3. **Problem Statement**: Data-driven statistics about industry bias
4. **How It Works**: Three-step process explanation
5. **Testimonials**: Writer success stories
6. **Benefits for Writers**: Feature list with stats
7. **For Publications**: Dark section for publication benefits
8. **Final CTA**: Full-width conversion section
9. **Footer**: Five-column navigation layout

### Design System

**Color Palette**:
- Primary: Neutral/black (`neutral-900`)
- Accent: Emerald for success states (`emerald-500`)
- Backgrounds: Neutral scales (white, `neutral-50`, `neutral-900`)

**Typography Scale**:
- Headlines: `text-6xl` to `text-7xl` with Fraunces serif
- Body: `text-xl` with Inter sans
- Small text: `text-sm` to `text-xs`

**Spacing**:
- Sections: `py-20` to `py-32`
- Containers: `max-w-7xl` centered with auto margins
- Grid gaps: `gap-6` to `gap-12`

**Border Radius**:
- Cards use `rounded-sm` for sharp, editorial aesthetic (not the default rounded radius)

## Key Patterns

### Component Variants
shadcn/ui components use `class-variance-authority` for variant management:
```typescript
<Button variant="outline" size="lg">Text</Button>
<Badge variant="secondary">Label</Badge>
```

### Responsive Grid Layouts
The hero and other sections use 12-column grids:
```typescript
<div className="grid lg:grid-cols-12 gap-12">
  <div className="lg:col-span-7">...</div>
  <div className="lg:col-span-5">...</div>
</div>
```

### Typography Hierarchy
Headlines use tight leading and serif font:
```typescript
<h1 className="text-6xl lg:text-7xl font-serif leading-[1.1]">
```

Body text uses relaxed leading:
```typescript
<p className="text-xl text-neutral-600 leading-relaxed">
```

## Design Philosophy

This landing page demonstrates premium design principles:
- **Minimal color palette**: Neutral-focused with strategic accent colors
- **Editorial typography**: Large serif headlines, generous white space
- **Sharp aesthetics**: Using `rounded-sm` instead of heavily rounded corners
- **Subtle interactions**: Hover states on cards and buttons
- **Information hierarchy**: Clear visual flow from hero to conversion
- **Mystery element**: The [REDACTED] publication card reinforces the blind pitching concept

## Important Notes

- **No backend**: This is a static frontend mockup. All data is hardcoded.
- **No routing**: Single-page application with anchor links only.
- **Turbopack**: Build and dev commands use `--turbopack` flag for faster compilation.
- **Font loading**: Google Fonts are loaded via Next.js font optimization.
- **Image optimization**: Currently no images; design relies on typography and color.
