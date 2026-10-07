import { heroStats } from '../data/site'
import { ArrowRight, CheckIcon } from './Icons'

/** Decorative half-court linework behind the hero copy. */
function CourtLines() {
  return (
    <svg className="hero__court" viewBox="0 0 900 900" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M60 120h780v660H60z" />
        <path d="M60 450h780" />
        <circle cx="450" cy="450" r="110" />
        <path d="M340 450a110 110 0 0 0 220 0" />
        <path d="M60 240h190v420H60zM840 240H650v420h190z" />
        <path d="M250 330a170 170 0 0 1 0 240M650 330a170 170 0 0 0 0 240" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--lime" />
        <div className="hero__glow hero__glow--amber" />
        <CourtLines />
      </div>

      <div className="container hero__inner">
        <p className="eyebrow reveal" data-reveal>
          <span className="eyebrow__dot" />
          African basketball scouting &amp; prospect intelligence
        </p>

        <h1 className="hero__title reveal" data-reveal>
          The clearest read on
          <span className="hero__title-accent"> Africa&rsquo;s next generation </span>
          of basketball talent.
        </h1>

        <p className="hero__lede reveal" data-reveal>
          Verified measurables, film-backed evaluations and development tracking on African and
          African-heritage prospects &mdash; from academies in Lagos to draft night in the NBA.
        </p>

        <div className="hero__cta reveal" data-reveal>
          <a className="btn btn--primary" href="https://pro-edgesports.com/category/database/">
            Explore the database
            <ArrowRight width="18" height="18" />
          </a>
          <a className="btn btn--ghost" href="https://calendly.com/proedgesportss/15min">
            Book a consultation
          </a>
        </div>

        <dl className="hero__stats reveal" data-reveal>
          {heroStats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <dt className="hero__stat-value">{s.value}</dt>
              <dd className="hero__stat-label">
                <CheckIcon width="14" height="14" />
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
