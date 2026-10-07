import { useState } from 'react'
import { brand } from '../data/site'

/**
 * The PES lockup: monogram tile + wordmark.
 *
 * Renders the uploaded PNG when `brand.mark === 'logo'`; if that file ever fails
 * to load it drops back to the PES tile, which is also the default mark.
 */
export default function BrandMark({ compact = false }) {
  const [logoOk, setLogoOk] = useState(true)
  const useLogo = brand.mark === 'logo' && logoOk

  return (
    <>
      {useLogo ? (
        <img
          className="brand__logo"
          src={brand.logo}
          alt=""
          referrerPolicy="no-referrer"
          onError={() => setLogoOk(false)}
        />
      ) : (
        <span className="brand__tile" aria-hidden="true">
          {brand.short}
        </span>
      )}

      {!compact && (
        <span className="brand__text">
          <strong>{brand.wordmark[0]}</strong>
          <em>{brand.wordmark[1]}</em>
        </span>
      )}
    </>
  )
}
