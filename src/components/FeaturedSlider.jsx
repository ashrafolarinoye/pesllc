import { useCallback, useEffect, useRef, useState } from 'react'
import { brand, featuredSlides, heroStats } from '../data/site'
import Img from './Img'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, CheckIcon } from './Icons'

const DURATION = 620 // slide transition, ms
const AUTOPLAY = 6000 // ms per slide
const SWIPE = 48 // px before a drag counts as a swipe

/** Decorative half-court linework behind the headline. */
function CourtLines() {
  return (
    <svg className="featured__court" viewBox="0 0 900 900" aria-hidden="true" focusable="false">
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

export default function FeaturedSlider() {
  const n = featuredSlides.length

  /**
   * Track holds [clone-of-last, ...slides, clone-of-first] so next/prev can loop
   * seamlessly. `pos` indexes into that track; the real slide index wraps back
   * after landing on a clone.
   */
  const [pos, setPos] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)

  const rootRef = useRef(null)
  const drag = useRef(null)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const index = (((pos - 1) % n) + n) % n

  const go = useCallback(
    (dir) => setPos((v) => Math.min(n + 1, Math.max(0, v + dir))),
    [n],
  )

  // Landed on a clone → jump to the matching real slide without animating.
  useEffect(() => {
    if (pos === n + 1) {
      const t = setTimeout(() => {
        setAnimate(false)
        setPos(1)
      }, DURATION)
      return () => clearTimeout(t)
    }
    if (pos === 0) {
      const t = setTimeout(() => {
        setAnimate(false)
        setPos(n)
      }, DURATION)
      return () => clearTimeout(t)
    }
  }, [pos, n])

  // Re-enable transitions one beat after an instant jump.
  useEffect(() => {
    if (animate) return
    const t = setTimeout(() => setAnimate(true), 40)
    return () => clearTimeout(t)
  }, [animate])

  // Autoplay — only while visible, not paused, never under reduced motion.
  useEffect(() => {
    if (reduceMotion || paused || !inView) return
    const id = setInterval(() => go(1), AUTOPLAY)
    return () => clearInterval(id)
  }, [reduceMotion, paused, inView, go])

  useEffect(() => {
    const el = rootRef.current
    if (!el || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    drag.current = e.clientX
  }

  const onPointerUp = (e) => {
    const start = drag.current
    drag.current = null
    if (start == null) return
    const dx = e.clientX - start
    if (Math.abs(dx) < SWIPE) return
    go(dx < 0 ? 1 : -1)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  const ordered = [featuredSlides[n - 1], ...featuredSlides, featuredSlides[0]]

  return (
    <section className="section section--featured" id="top">
      <div className="featured__bg" aria-hidden="true">
        <div className="featured__glow featured__glow--lime" />
        <div className="featured__glow featured__glow--amber" />
        <CourtLines />
        <span className="featured__watermark">{brand.short}</span>
      </div>

      <div className="container">
        <div className="featured__head">
          <div className="featured__head-main">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              African basketball scouting &amp; prospect intelligence
            </p>
            <h1 className="featured__title">
              The clearest read on
              <span className="featured__title-accent"> Africa&rsquo;s next generation </span>
              of basketball talent.
            </h1>
          </div>

          <div className="featured__head-aside">
            <p className="featured__lede">
              Verified measurables, film-backed evaluations and development tracking on African
              and African-heritage prospects &mdash; from academies in Lagos to draft night in the
              NBA.
            </p>
            <div className="featured__cta">
              <a className="btn btn--primary" href="https://pro-edgesports.com/category/database/">
                Explore the database
                <ArrowRight width="18" height="18" />
              </a>
              <a className="btn btn--ghost" href="https://calendly.com/proedgesportss/15min">
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        <div className="featured__label reveal" data-reveal>
          <p className="eyebrow">Featured posts</p>
          <a
            className="link-arrow"
            href="https://pro-edgesports.com/category/insights/"
          >
            All insights
            <ArrowUpRight width="17" height="17" />
          </a>
        </div>

        <div
          className="slider"
          ref={rootRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="slider__viewport"
            role="group"
            aria-roledescription="carousel"
            aria-label="Featured posts"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              drag.current = null
            }}
          >
            <div
              className="slider__track"
              style={{
                transform: `translateX(-${pos * 100}%)`,
                transition: animate ? `transform ${DURATION}ms var(--ease)` : 'none',
              }}
            >
              {ordered.map((s, i) => {
                const isCurrent = i === pos
                const label = ((((i - 1) % n) + n) % n) + 1
                return (
                  <article
                    className="slide"
                    key={`${i}-${s.id}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${label} of ${n}`}
                    aria-hidden={!isCurrent}
                  >
                    <a className="slide__media" href={s.href} tabIndex={isCurrent ? 0 : -1}>
                      <Img src={s.image} alt="" label={s.title} />
                      <span className="slide__badge">
                        {s.kind === 'profile' ? 'New profile' : 'Featured'}
                      </span>
                      <span className="slide__num" aria-hidden="true">
                        {String(label).padStart(2, '0')}
                      </span>
                    </a>

                    <div className="slide__body">
                      <span className="chip">{s.kicker}</span>
                      <h2 className="slide__title">
                        <a href={s.href} tabIndex={isCurrent ? 0 : -1}>
                          {s.title}
                        </a>
                      </h2>
                      <p className="slide__excerpt">{s.excerpt}</p>

                      <div className="meta">
                        <span className="meta__author">By {s.author}</span>
                        <span className="meta__sep" />
                        <span>{s.time}</span>
                      </div>

                      <a
                        className="btn btn--primary btn--sm slide__cta"
                        href={s.href}
                        tabIndex={isCurrent ? 0 : -1}
                      >
                        {s.cta}
                        <ArrowRight width="16" height="16" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="slider__controls">
            <div className="slider__arrows">
              <button
                type="button"
                className="icon-btn"
                onClick={() => go(-1)}
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => go(1)}
                aria-label="Next slide"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="slider__dots">
              {featuredSlides.map((s, i) => (
                <button
                  type="button"
                  key={s.id}
                  className={`slider__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => setPos(i + 1)}
                  aria-label={`Go to slide ${i + 1}: ${s.title}`}
                  aria-current={i === index}
                >
                  {i === index && !reduceMotion && (
                    <span
                      className="slider__dot-fill"
                      style={{
                        animationDuration: `${AUTOPLAY}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <p className="slider__count" aria-hidden="true">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>/ {String(n).padStart(2, '0')}</span>
            </p>
          </div>
        </div>

        <dl className="featured__stats reveal" data-reveal>
          {heroStats.map((s) => (
            <div className="featured__stat" key={s.label}>
              <dt className="featured__stat-value">{s.value}</dt>
              <dd className="featured__stat-label">
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
