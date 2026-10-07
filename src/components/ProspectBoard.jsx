import { useState } from 'react'
import { prospectTabs } from '../data/site'
import SectionHead from './SectionHead'
import { ArrowRight, DownloadIcon } from './Icons'
import Img from './Img'

export default function ProspectBoard() {
  const [active, setActive] = useState(prospectTabs[0].id)
  const tab = prospectTabs.find((t) => t.id === active) ?? prospectTabs[0]

  return (
    <section className="section section--prospects" id="prospects">
      <div className="container">
        <SectionHead
          eyebrow="The board"
          title="Prospects on the Pro-Edge radar"
          description="Every profile carries verified measurables, a school and country record, and its own scannable prospect ID."
          action={{ label: 'Open database', href: 'https://pro-edgesports.com/category/database/' }}
        />

        <div className="board__tabs reveal" data-reveal role="tablist" aria-label="Prospect boards">
          {prospectTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={t.id === active}
              aria-controls={`panel-${t.id}`}
              className={`board__tab${t.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
              <span className="board__tab-count">{t.cards.length}</span>
            </button>
          ))}
        </div>

        <p className="board__note reveal" data-reveal>
          {tab.note}
        </p>

        <div
          className="prospects"
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
        >
          {tab.cards.map((p, i) => (
            <article className="prospect" key={p.id} style={{ animationDelay: `${i * 90}ms` }}>
              <div className="prospect__media">
                <Img src={p.image} alt={p.name} label={p.name} />

                <span className="prospect__cat">{tab.label}</span>

                <div className="prospect__qr" aria-hidden="true">
                  <Img src={p.qr} alt="" label="ID" />
                  <span className="prospect__qr-title">Official Prospect ID</span>
                  <span className="prospect__qr-hint">Scan to view full scouting report</span>
                </div>
              </div>

              <div className="prospect__body">
                <h3 className="prospect__name">{p.name}</h3>
                <p className="prospect__pos">{p.position}</p>

                <dl className="measurables">
                  {p.measurables.map((m) => (
                    <div className={`measurable${m.wide ? ' measurable--wide' : ''}`} key={m.k}>
                      <dt>{m.k}</dt>
                      <dd>{m.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="prospect__foot">
                  <span className="meta">
                    By <span className="meta__author">Godwin Owinje</span>
                    <span className="meta__sep" />
                    {p.time}
                  </span>
                  <div className="prospect__actions">
                    <a className="btn btn--primary btn--xs" href={p.href}>
                      View Profile
                      <ArrowRight width="15" height="15" />
                    </a>
                    <a className="icon-btn icon-btn--sm" href={p.href} aria-label={`Download ${p.name} report`}>
                      <DownloadIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
