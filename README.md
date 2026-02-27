# SEUSU SKIN — Brand Website

A brand awareness website for **SEUSU SKIN** built with React, TypeScript, Tailwind CSS, and Vite.

## Stack
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Vite** for fast development & build

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
seusu-skin/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx          # Entry point
    ├── App.tsx           # Root component
    ├── index.css         # Global styles + animations
    ├── hooks/
    │   └── useReveal.ts  # IntersectionObserver scroll reveal
    └── components/
        ├── Header.tsx    # Fixed nav with scroll effect
        ├── Hero.tsx      # Full-screen hero with particle canvas
        ├── Marquee.tsx   # Animated ticker band
        ├── BrandStory.tsx  # Brand story + feature pillars
        ├── Technology.tsx  # Hydro-Lock Molecule science section
        ├── ProductRange.tsx # 5-product color-coded collection
        ├── Philosophy.tsx  # Brand values + quote
        └── Footer.tsx    # CTA + links + color legend
```

## Brand Colors

| Name | Hex |
|------|-----|
| Main Blue | `#336699` |
| Hydration Sky | `#A8D1E7` |
| Sunset Orange | `#E88B4D` |
| Lavender / Indigo | `#8E7CC3` |
| Sage / Moss Green | `#8FBC8F` |
| Clinical Silver | `#D3D3D3` |

## Font
**Josefin Sans** — loaded from Google Fonts in `index.html`.
