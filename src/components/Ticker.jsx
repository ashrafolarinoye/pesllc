import { tickerItems } from '../data/site'
import { BoltIcon } from './Icons'

export default function Ticker() {
  // Duplicate the list so the marquee loops without a visible gap.
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <div className="ticker" role="region" aria-label="Latest releases">
      <div className="ticker__track">
        {items.map((item, i) => (
          <a className="ticker__item" key={`${item.label}-${i}`} href={item.href} target="_blank" rel="noreferrer">
            <span className="ticker__tag">
              <BoltIcon />
              {item.tag}
            </span>
            <span className="ticker__label">{item.label}</span>
            <span className="ticker__dot" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}
