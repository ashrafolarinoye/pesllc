import { useState } from 'react'
import { pricingGroups } from '../data/site'
import SectionHead from './SectionHead'
import { ArrowRight, CheckIcon, ArrowUpRight } from './Icons'

export default function Pricing() {
  const [active, setActive] = useState(pricingGroups[0].id)
  const group = pricingGroups.find((g) => g.id === active) ?? pricingGroups[0]

  return (
    <section className="section section--pricing" id="pricing">
      <div className="container">
        <SectionHead
          eyebrow="Pricing"
          title="Plans built for every stage of the path"
          description="From one-on-one consulting to full database access, choose the level of engagement that fits where you are — a program, an agent, or a family."
        />

        <div className="seg reveal" data-reveal role="tablist" aria-label="Plan type">
          {pricingGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={g.id === active}
              className={`seg__btn${g.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(g.id)}
            >
              {g.label}
            </button>
          ))}
          <span
            className="seg__thumb"
            style={{ transform: `translateX(${pricingGroups.findIndex((g) => g.id === active) * 100}%)` }}
            aria-hidden="true"
          />
        </div>

        <p className="pricing__group-note reveal" data-reveal>
          {group.description}
        </p>

        <div className={`plans plans--${group.plans.length}`} key={group.id}>
          {group.plans.map((plan, i) => (
            <article
              className={`plan${plan.badge ? ' plan--featured' : ''}`}
              key={plan.id}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {plan.badge && <span className="plan__badge">{plan.badge}</span>}

              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__desc">{plan.description}</p>

              <p className="plan__price">
                <span className={plan.price.startsWith('$') ? 'plan__amount' : 'plan__amount plan__amount--text'}>
                  {plan.price}
                </span>
                {plan.unit && <span className="plan__unit">{plan.unit}</span>}
              </p>
              <p className="plan__billed">{plan.billed}</p>

              <a className={`btn ${plan.badge ? 'btn--primary' : 'btn--ghost'} plan__cta`} href={plan.href}>
                {plan.cta}
                <ArrowRight width="17" height="17" />
              </a>

              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing__foot reveal" data-reveal>
          {group.footnote.text}
          <a href={group.footnote.href}>
            {group.id === 'database' ? "See what's inside each tier" : 'Talk to us about a tailored engagement'}
            <ArrowUpRight width="15" height="15" />
          </a>
        </p>
      </div>
    </section>
  )
}
