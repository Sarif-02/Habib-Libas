# Habib Libas — React + Tailwind CSS

Premium tailoring website built with React 18, Vite, and Tailwind CSS v3.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
habib-libas/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component
    ├── index.css             # Global styles & animations
    │
    ├── data/
    │   └── index.js          # All app data (products, fabrics, etc.)
    │
    ├── hooks/
    │   ├── useScrollReveal.js
    │   └── useCart.js
    │
    └── components/
        ├── layout/
        │   ├── Navbar.jsx
        │   ├── MobileMenu.jsx
        │   ├── CartDrawer.jsx
        │   ├── Footer.jsx
        │   └── MobileBottomCTA.jsx
        │
        ├── sections/
        │   ├── Hero.jsx
        │   ├── Marquee.jsx
        │   ├── Services.jsx
        │   ├── Stats.jsx
        │   ├── Story.jsx
        │   ├── Collections.jsx
        │   ├── Products.jsx        ← Full product section with filter/sort/cart
        │   ├── Process.jsx
        │   ├── FabricSelector.jsx
        │   ├── Gallery.jsx
        │   ├── Testimonials.jsx
        │   ├── CtaBanner.jsx
        │   ├── Pricing.jsx
        │   └── Contact.jsx
        │
        └── ui/
            ├── Cursor.jsx
            ├── ScrollProgress.jsx
            └── Lightbox.jsx
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Hero** | 3-slide auto-rotating with shimmer text & floating badges |
| **Marquee** | Infinite scrolling ticker strip |
| **Services** | 6 animated cards with icon hover flip |
| **Stats** | Dark strip with hover gold highlight |
| **Story** | Overlapping image collage with floating badge |
| **Collections** | Masonry-offset grid + wide banner |
| **Products** | Filter by category, sort, grid/list toggle, wishlist, color swatches, quick-add to cart |
| **Cart Drawer** | Side panel with quantity control & subtotal |
| **Process** | 4-step with connecting line |
| **Fabric Selector** | Interactive chips with live image/info swap |
| **Gallery** | Masonry columns with lightbox |
| **Testimonials** | Auto-rotating with avatar stack |
| **CTA Banner** | Full-bleed image |
| **Pricing** | 3 plans, highlighted middle |
| **Contact** | Form with loading & success states |
| **Footer** | Dark, multi-column, newsletter |
| **Cursor** | Custom animated cursor (desktop) |
| **Scroll Progress** | Gold progress bar |
| **Mobile CTA** | Sticky bottom WhatsApp + Order bar |

---

## 🎨 Design Tokens

Colors are defined in `tailwind.config.js`:

```js
gold:        '#775a19'   // Primary brand colour
gold-light:  '#c5a059'   // Lighter gold
gold-pale:   '#e9c176'   // Pale gold (hero shimmer)
ink:         '#1a1c1b'   // Near-black text
parchment:   '#f9f9f7'   // Primary background
charcoal:    '#2f3130'   // Dark sections
```

Fonts: **Playfair Display** (headings) + **DM Sans** (body)

---

## 📱 Responsive Breakpoints

- Mobile-first design
- `sm`: 640px — layout shifts begin
- `md`: 768px — two-column grids
- `lg`: 1024px — desktop nav, cursor, hide mobile CTA
- `xl`: 1280px — wider padding
