import { testimonial } from '../data/site'
import { QuoteIcon } from './Icons'
import Img from './Img'

export default function Testimonial() {
  return (
    <section className="section section--quote" id="featured">
      <div className="container">
        <figure className="quote reveal" data-reveal>
          <QuoteIcon className="quote__mark" />

          <blockquote className="quote__text">{testimonial.quote}</blockquote>

          <figcaption className="quote__by">
            <Img className="quote__avatar" src={testimonial.image} alt="" label={testimonial.name} />
            <span>
              <strong>{testimonial.name}</strong>
              <em>{testimonial.role}</em>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
