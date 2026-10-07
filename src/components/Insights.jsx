import { insights } from '../data/site'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'
import Img from './Img'

export default function Insights() {
  return (
    <section className="section section--insights" id="insights">
      <div className="container">
        <SectionHead
          eyebrow="Insights"
          title="Latest from the scouting desk"
          description="Written evaluations and prospect reports from Godwin Owinje and the Pro-Edge team."
          action={{ label: 'View all', href: 'https://pro-edgesports.com/category/insights/' }}
        />

        <div className="insights">
          {insights.map((a, i) => (
            <article className="insight-card reveal" data-reveal key={a.id}>
              <a className="insight-card__media" href={a.href}>
                <Img src={a.image} alt="" label={a.title} />
                <span className="insight-card__index">0{i + 1}</span>
              </a>
              <div className="insight-card__body">
                <span className="chip">{a.category}</span>
                <h3 className="insight-card__title">
                  <a href={a.href}>{a.title}</a>
                </h3>
                <p className="insight-card__excerpt">{a.excerpt}</p>
                <div className="meta">
                  <span className="meta__author">By {a.author}</span>
                  <span className="meta__sep" />
                  <span>{a.time}</span>
                  <a className="insight-card__go" href={a.href} aria-label={`Read: ${a.title}`}>
                    <ArrowUpRight width="16" height="16" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
