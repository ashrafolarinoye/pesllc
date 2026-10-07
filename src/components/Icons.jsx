/**
 * Inline SVG icon set — keeps the page dependency-free and styleable via currentColor.
 */
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowUp = (p) => (
  <svg {...base} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg {...base} width="18" height="18" {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
)

export const DownloadIcon = (p) => (
  <svg {...base} width="16" height="16" {...p}>
    <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14" />
  </svg>
)

export const ChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="M14.5 5 8 12l6.5 7" />
  </svg>
)

export const ChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 5 16 12l-6.5 7" />
  </svg>
)

export const BoltIcon = (p) => (
  <svg {...base} width="16" height="16" {...p}>
    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />
  </svg>
)

export const QuoteIcon = (p) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M18.6 8c-7.2 3.1-11.6 8.7-11.6 16.3 0 6.3 3.6 10.7 9 10.7 4.4 0 7.6-3.1 7.6-7.3 0-3.9-2.6-6.8-6.2-6.8-1 0-2 .2-2.7.5.7-4 3.3-7.4 7-9.6zM38.6 8c-7.2 3.1-11.6 8.7-11.6 16.3 0 6.3 3.6 10.7 9 10.7 4.4 0 7.6-3.1 7.6-7.3 0-3.9-2.6-6.8-6.2-6.8-1 0-2 .2-2.7.5.7-4 3.3-7.4 7-9.6z" />
  </svg>
)

const SocialPaths = {
  facebook: (
    <path d="M14.5 8.5H17V5.8c-.6-.1-1.4-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.3v2H8v3h2.5v7.6h3.2v-7.6h2.6l.4-3h-3V10c0-.9.4-1.5.8-1.5z" />
  ),
  twitter: <path d="M4 4.6l6.2 8L4.4 19.4h2.3l4.6-5.3 3.9 5.3H20l-6.5-8.6L19.4 4.6H17l-4.2 4.9-3.6-4.9zm2.3 1.8h1.7l9.6 12.7h-1.7z" />,
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3.2" />
      <path d="m11 10 4 2-4 2z" />
    </>
  ),
  tiktok: (
    <path d="M14.2 4h2.5c.2 1.6 1.2 3 2.7 3.5v2.5a6.4 6.4 0 0 1-2.6-.7v4.7a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.6a2.7 2.7 0 1 0 1.8 2.6z" />
  ),
}

export const SocialIcon = ({ name, ...p }) => (
  <svg {...base} strokeWidth="1.4" viewBox="0 0 24 24" {...p}>
    {SocialPaths[name] ?? SocialPaths.facebook}
  </svg>
)
