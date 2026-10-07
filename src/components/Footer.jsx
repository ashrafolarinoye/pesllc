import { useState } from 'react'
import { brand, footerColumns, navLinks, socials } from '../data/site'
import { ArrowUp, SocialIcon } from './Icons'

export default function Footer() {
  const [logoOk, setLogoOk] = useState(true)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="/" aria-label={`${brand.name} — home`}>
              {logoOk ? (
                <img
      className="brand__logo"
      src={brand.logo}
      alt=""
      referrerPolicy="no-referrer"
      onError={() => setLogoOk(false)}
    />
              ) : (
                <span className="brand__fallback">
                  {brand.wordmark[0]}
                  <em>{brand.wordmark[1]}</em>
                </span>
              )}
            </a>
            <p className="footer__blurb">{brand.blurb}</p>
            <div className="footer__social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="icon-btn icon-btn--sm">
                  <SocialIcon name={s.icon} width="18" height="18" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {footerColumns.map((col) => (
              <div className="footer__col" key={col.title}>
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col">
              <h3 className="footer__col-title">Follow us</h3>
              <ul>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <nav className="footer__mini" aria-label="Footer secondary">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="footer__top-btn" href="#top">
            Back to top
            <ArrowUp width="16" height="16" />
          </a>
        </div>
      </div>
    </footer>
  )
}
