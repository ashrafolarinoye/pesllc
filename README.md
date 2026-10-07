# Pro-Edge Sports — homepage redesign

A modern, from-scratch redesign of the [Pro-Edge Sports](https://pro-edgesports.com/) homepage —
an independent scouting and prospect-intelligence service covering African and
African-heritage basketball talent.

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
| **Sticky nav** | Transparent → blurred glass on scroll, expanding search, full-screen mobile menu, read-progress hairline |
| **Hero** | Big display type over a half-court line pattern, dual CTAs, key-figure strip |
| **Top story** | One lead card + two secondary rows |
| **Insights** | Three latest scouting reports |
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
    ProspectBoard.jsx  Testimonial.jsx  Pricing.jsx  Headlines.jsx
    CTA.jsx  Footer.jsx  SectionHead.jsx  Img.jsx  Icons.jsx
  styles/
    tokens.css          design tokens (colour, type, spacing, motion)
    base.css            reset, typography, buttons, chips, utilities
    sections.css        section-level styles + responsive rules
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `--ink-900` | `#07080a` | page background |
| `--ink-850` | `#0b0d11` | card surfaces |
| `--lime` | `#c8ff3d` | primary accent, CTAs, data labels |
| `--amber` | `#ff6b2c` | "live" pulse, secondary glow |
| `--font-display` | Anton | headlines, prices, prospect names |
| `--font-body` | Inter | copy |
| `--font-mono` | JetBrains Mono | eyebrows, measurables, meta |

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
