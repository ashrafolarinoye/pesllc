import { brand, footerColumns, navLinks, socials } from '../data/site'
import { ArrowUp, SocialIcon } from './Icons'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="/" aria-label={`${brand.name} — home`}>
              <BrandMark />
            </a>
            <p className="footer__blurb">{brand.blurb}</p>
            <span className="footer__watermark" aria-hidden="true">
              {brand.short}
            </span>
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
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            <span className="footer__dot" aria-hidden="true" />
            {brand.short}
          </p>
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
