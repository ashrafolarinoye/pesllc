import { headlines } from '../data/site'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'

export default function Headlines() {
  return (
    <section className="section section--headlines" id="headlines">
      <div className="container">
        <SectionHead
          eyebrow="Headlines"
          title="Around the game"
          description="The wider college and pro basketball news feeding into this week's scouting notes."
        />

        <ul className="headlines reveal" data-reveal>
          {headlines.map((h, i) => (
            <li key={h.href}>
              <a href={h.href} target="_blank" rel="noreferrer">
                <span className="headlines__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="headlines__text">
                  <span className="headlines__title">{h.title}</span>
                  <span className="headlines__source">
                    {h.source}
                    <span className="meta__sep" />
                    {h.date}
                  </span>
                </span>
                <ArrowUpRight className="headlines__go" width="16" height="16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
