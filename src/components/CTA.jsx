import { useState } from 'react'
import { ArrowRight, BoltIcon } from './Icons'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <section className="section section--cta" id="subscribe">
      <div className="container">
        <div className="cta reveal" data-reveal>
          <div className="cta__copy">
            <p className="eyebrow">
              <BoltIcon />
              The Pro-Edge brief
            </p>
            <h2 className="cta__title">
              Get the week&rsquo;s African prospect movement <em>before</em> it travels.
            </h2>
            <p className="cta__sub">
              Tournament recaps, new database entries and board changes &mdash; one email, every
              week.
            </p>
          </div>

          {sent ? (
            <div className="cta__done" role="status">
              <strong>You&rsquo;re on the list.</strong>
              <span>Watch your inbox for the next Pro-Edge brief.</span>
            </div>
          ) : (
            <form className="cta__form" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="cta-email">
                Email address
              </label>
              <input
                id="cta-email"
                className="cta__input"
                type="email"
                required
                placeholder="you@program.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn--primary" type="submit">
                Subscribe
                <ArrowRight width="18" height="18" />
              </button>
              <p className="cta__fine">
                No spam. Unsubscribe any time. Database plans include the brief automatically.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
