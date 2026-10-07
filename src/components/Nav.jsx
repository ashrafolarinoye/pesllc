import { useEffect, useState } from 'react'
import { brand, navLinks, socials } from '../data/site'
import { useScrolled, useScrollProgress } from '../hooks/useReveal'
import { SearchIcon, MenuIcon, CloseIcon, ArrowRight, SocialIcon } from './Icons'
import BrandMark from './BrandMark'

export default function Nav() {
  const scrolled = useScrolled(30)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`nav${scrolled ? ' is-stuck' : ''}`}>
        <div className="nav__inner container">
          <a className="brand" href="/" aria-label={`${brand.name} — home`}>
            <BrandMark />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.label} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>

            <a
              className="btn btn--ghost btn--sm nav__signin"
              href="https://pro-edgesports.com/login/"
            >
              Sign In
            </a>

            <button
              type="button"
              className="icon-btn nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Expanding search panel */}
        <div className={`nav__search${searchOpen ? ' is-open' : ''}`}>
          <div className="container nav__search-inner">
            <SearchIcon width="22" height="22" />
            <input
              className="nav__search-input"
              type="search"
              placeholder="Search prospects, teams, reports…"
              aria-label="Search prospects, teams, reports"
            />
            <button type="button" className="btn btn--primary btn--sm">
              Search
            </button>
          </div>
        </div>

        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      {/*
        Mobile panel lives OUTSIDE <header> on purpose: the stuck header uses
        backdrop-filter, which would make it the containing block for any
        position:fixed descendant and break the full-screen menu.
      */}
      <div className={`nav__panel${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="container nav__panel-inner">
          <nav className="nav__panel-links" aria-label="Mobile">
            {navLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                style={{ transitionDelay: `${open ? 60 + i * 40 : 0}ms` }}
                tabIndex={open ? 0 : -1}
              >
                <span className="nav__panel-num">0{i + 1}</span>
                {l.label}
                <ArrowRight width="18" height="18" />
              </a>
            ))}
          </nav>

          <div className="nav__panel-foot">
            <a
              className="btn btn--primary btn--sm"
              href="https://pro-edgesports.com/pricing/"
              tabIndex={open ? 0 : -1}
            >
              Get Database Access
            </a>
            <div className="nav__panel-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} tabIndex={open ? 0 : -1}>
                  <SocialIcon name={s.icon} width="18" height="18" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
