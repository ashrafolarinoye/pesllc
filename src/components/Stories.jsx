import { topStories } from '../data/site'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'
import Img from './Img'

export default function Stories() {
  const [lead, ...rest] = topStories

  return (
    <section className="section section--stories" id="top-story">
      <div className="container">
        <SectionHead
          eyebrow="Top story"
          title="What the Pro-Edge desk is watching"
          description="Tournament recaps, performance breakdowns and the reports behind every ranking on the board."
          action={{ label: 'All insights', href: 'https://pro-edgesports.com/category/insights/' }}
        />

        <div className="stories">
          <a className="story-lead reveal" data-reveal href={lead.href}>
            <div className="story-lead__media">
              <Img src={lead.image} alt="" label={lead.title} />
              <span className="badge badge--live">
                <span className="badge__pulse" />
                Featured
              </span>
            </div>
            <div className="story-lead__body">
              <h3 className="story-lead__title">{lead.title}</h3>
              <p className="story-lead__excerpt">{lead.excerpt}</p>
              <div className="meta">
                <span className="meta__author">By {lead.author}</span>
                <span className="meta__sep" />
                <span>{lead.time}</span>
                <span className="story-lead__go">
                  Read report
                  <ArrowUpRight width="16" height="16" />
                </span>
              </div>
            </div>
          </a>

          <div className="stories__side">
            {rest.map((s) => (
              <a className="story-row reveal" data-reveal href={s.href} key={s.id}>
                <div className="story-row__media">
                  <Img src={s.image} alt="" label={s.title} />
                </div>
                <div className="story-row__body">
                  <span className="chip">{s.category}</span>
                  <h3 className="story-row__title">{s.title}</h3>
                  <div className="meta">
                    <span className="meta__author">By {s.author}</span>
                    <span className="meta__sep" />
                    <span>{s.time}</span>
                  </div>
                </div>
                <ArrowUpRight className="story-row__go" width="18" height="18" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
