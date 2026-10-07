import { useCallback, useEffect, useRef, useState } from 'react'
import { newsSlides } from '../data/site'
import SectionHead from './SectionHead'
import Img from './Img'
import { ChevronLeft, ChevronRight, ArrowRight } from './Icons'

const DURATION = 620 // slide transition, ms
const AUTOPLAY = 6000 // ms per slide
const SWIPE = 48 // px before a drag counts as a swipe

export default function NewsSlider() {
  const n = newsSlides.length

  /**
   * Track holds [clone-of-last, ...slides, clone-of-first] so next/prev can loop
   * seamlessly. `pos` is the index into that track; the real slide index is
   * derived from it and wraps back after landing on a clone.
   */
  const [pos, setPos] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)

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

  // Autoplay — only while visible, not paused, and never under reduced motion.
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
      threshold: 0.3,
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

  const ordered = [newsSlides[n - 1], ...newsSlides, newsSlides[0]]

  return (
    <section className="section section--news" id="news">
      <div className="container">
        <SectionHead
          eyebrow="PES desk"
          title="Latest news from the desk"
          description="New profiles hitting the board and the reports behind them — swipe, drag or use the arrows."
          action={{ label: 'All insights', href: 'https://pro-edgesports.com/category/insights/' }}
        />

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
            aria-label="Latest news from the PES desk"
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
                return (
                  <article
                    className="slide"
                    key={`${i}-${s.id}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${(((i - 1) % n) + n) % n + 1} of ${n}`}
                    aria-hidden={!isCurrent}
                  >
                    <a
                      className="slide__media"
                      href={s.href}
                      tabIndex={isCurrent ? 0 : -1}
                    >
                      <Img src={s.image} alt="" label={s.title} />
                      <span className="slide__badge">
                        {s.kind === 'profile' ? 'New profile' : 'Report'}
                      </span>
                      <span className="slide__num" aria-hidden="true">
                        {String((((i - 1) % n) + n) % n + 1).padStart(2, '0')}
                      </span>
                    </a>

                    <div className="slide__body">
                      <span className="chip">{s.kicker}</span>
                      <h3 className="slide__title">
                        <a href={s.href} tabIndex={isCurrent ? 0 : -1}>
                          {s.title}
                        </a>
                      </h3>
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
              {newsSlides.map((s, i) => (
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
      </div>
    </section>
  )
}
