import { ArrowRight } from './Icons'

export default function SectionHead({ eyebrow, title, description, action }) {
  return (
    <div className="section-head reveal" data-reveal>
      <div className="section-head__text">
        {eyebrow && (
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            {eyebrow}
          </p>
        )}
        <h2 className="section-head__title">{title}</h2>
        {description && <p className="section-head__sub">{description}</p>}
      </div>

      {action && (
        <a className="link-arrow" href={action.href}>
          {action.label}
          <ArrowRight width="18" height="18" />
        </a>
      )}
    </div>
  )
}
