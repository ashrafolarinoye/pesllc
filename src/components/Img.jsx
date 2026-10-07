import { useState } from 'react'

const initialsOf = (text = '') =>
  text
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

/**
 * Image with a typographic fallback. Article and prospect photos are hotlinked
 * from the live WordPress install, so a 404 or hotlink block should degrade to
 * a branded placeholder rather than a broken-image icon.
 *
 * `alt`  → real alt text (leave "" when the image is decorative)
 * `label`→ text used to build the placeholder monogram
 */
export default function Img({ src, alt = '', label = '', className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`img-fallback ${className}`.trim()}
        role="img"
        aria-label={alt || label || undefined}
      >
        {initialsOf(label || alt) || 'PE'}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className || undefined}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
