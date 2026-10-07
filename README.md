# PES — Pro-Edge Sports homepage redesign

A modern, from-scratch redesign of the [Pro-Edge Sports](https://pro-edgesports.com/) homepage —
an independent scouting and prospect-intelligence service covering African and
African-heritage basketball talent — built around the **PES** monogram.

Built as a React + Vite single page. The original WordPress/Foxiz homepage was a dense
stack of widgets; this redesign keeps **every piece of real content** (top stories, insights,
prospect cards with prospect-ID QR codes, the Leonard Hamilton testimonial, all five pricing
tiers, the NCAA headlines feed) and re-architects it into a dark, editorial, scouting-desk
layout that reads on mobile as well as desktop.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle
```

## What's on the page

| Section | What it does |
| --- | --- |
| **Ticker** | Marquee of the latest `JUST IN` report PDFs; pauses on hover |
| **Sticky nav** | Transparent → blurred glass on scroll, **light/dark toggle**, expanding search, full-screen mobile menu, read-progress hairline |
| **Featured slider** | Top-of-page carousel: three featured reports plus three brand-new profiles. Drag/swipe, arrow keys, arrows, dots with a live progress fill; loops seamlessly both ways, pauses on hover/focus, only advances while on screen |
| **Insights** | Three latest scouting reports |
| **News slider** | Autoplaying carousel of the newest desk output — drag/swipe, arrow keys, arrows, dots with a live progress fill. Loops seamlessly in both directions, pauses on hover/focus, and only advances while on screen |
| **Prospect board** | Tabbed Draft / College board; cards carry measurables and reveal a scannable prospect-ID QR on hover or keyboard focus |
| **Testimonial** | Featured quote from Coach Leonard Hamilton |
| **Pricing** | Segmented control switching Database Access ↔ Consulting Services; all five real plans |
| **Headlines** | External college-basketball news feed |
| **CTA** | Newsletter capture with success state |
| **Footer** | Brand, three link columns, socials, back-to-top |

## Structure

```
index.html
vite.config.js
src/
  main.jsx              entry — imports the three stylesheets
  App.jsx               page composition
  data/site.js          ← all copy, images, links, prices (edit here first)
  hooks/useReveal.js    scroll-reveal, sticky-nav and read-progress hooks
  components/
    Nav.jsx  Ticker.jsx  Hero.jsx  Stories.jsx  Insights.jsx
    NewsSlider.jsx  ProspectBoard.jsx  Testimonial.jsx  Pricing.jsx
    Headlines.jsx  CTA.jsx  Footer.jsx  SectionHead.jsx
    BrandMark.jsx  Img.jsx  Icons.jsx
  styles/
    tokens.css          design tokens (colour, type, spacing, motion)
    base.css            reset, typography, buttons, chips, utilities
    sections.css        section-level styles + responsive rules
```

## PES branding

The **PES** monogram tile is the primary mark, rendered by `components/BrandMark.jsx` as a
lockup: lime tile + `PRO-EDGE / SPORTS` wordmark. It appears in the nav, the footer, and as an
oversized outlined watermark in both the hero and the footer. The favicon is an inline SVG using
the same tile.

To switch back to the uploaded raster logo instead, change one line in `src/data/site.js`:

```js
mark: 'logo',   // 'monogram' (default) | 'logo'
```

The tile is also the automatic fallback if that PNG ever fails to load, so the header can never
render empty.

## Themes

The page is **white by default** with a **dark mode toggle** in the nav (sun/moon). The choice
persists in `localStorage` under `pes-theme`; dark is opt-in and remembered.

- An inline script in `index.html` sets `data-theme` on `<html>` **before first paint**, so there
  is no flash of the wrong theme.
- `src/hooks/useTheme.js` owns the runtime toggle and keeps `<meta name="theme-color">` in sync.
- To default to the visitor's OS setting instead, add a `prefers-color-scheme` branch to that
  inline script (noted in the file).

Every colour is a CSS variable — nothing is hard-coded below `tokens.css`, so both themes stay in
sync automatically. The accent is split into three roles so it stays legible on both:

| Token | Role |
| --- | --- |
| `--lime` | accent **text**/icons on a page surface (olive on white, lime on black) |
| `--lime-fill` | accent **fills** — buttons, tiles, badges (always paired with near-black text) |
| `--lime-on-media` | accent text over dark photo scrims — bright in both themes |

## Design system

| Token | Light | Dark |
| --- | --- | --- |
| `--ink-900` | `#ffffff` page | `#07080a` page |
| `--ink-850` | `#f6f7f9` cards | `#0b0d11` cards |
| `--lime` | `#4c7a00` | `#c8ff3d` |
| `--lime-fill` | `#9ad61a` | `#c8ff3d` |
| `--amber` | `#e2561c` | `#ff6b2c` |
| `--font-display` | Anton — headlines, prices, prospect names |
| `--font-body` | Inter — copy |
| `--font-mono` | JetBrains Mono — eyebrows, measurables, meta |

Anton / Inter / JetBrains Mono load from Google Fonts, with system fallbacks baked into the
stack so the layout holds up offline.

## Notes

- **Images are hotlinked** from the live WordPress uploads directory (as agreed), so the page
  shows the real prospect and article photography. If a URL ever 404s — or the host turns on
  hotlink protection — `components/Img.jsx` swaps in a branded monogram placeholder instead of
  a broken-image icon. To make the site fully self-contained, download those files into
  `public/` and update the URLs in `src/data/site.js`.
- **The figures in `heroStats` are editable placeholders.** Replace them with real numbers
  before this goes live.
- Long, auto-generated article slugs from the source site were kept as links (they still
  resolve), but their display titles were shortened for legibility.
- `prefers-reduced-motion` disables the marquee, reveals and transforms.

## Deploying

`npm run build` emits a static `dist/` — deployable to Netlify, Vercel, Cloudflare Pages or
any static host with no server-side config.
