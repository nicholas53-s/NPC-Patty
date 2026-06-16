import { ADDRESS, CONTACT, HOURS, INSTAGRAM, waLink } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <span className="kicker kicker--light">{CONTACT.kicker}</span>
        <h2 className="contact__title">{CONTACT.title}</h2>
        <p className="contact__body">{CONTACT.body}</p>
        <a className="btn btn--solid btn--lg" href={waLink} target="_blank" rel="noreferrer">
          {CONTACT.cta}
        </a>
        <dl className="contact__details">
          <div>
            <dt>Find us</dt>
            <dd>{ADDRESS}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{HOURS}</dd>
          </div>
          <div>
            <dt>Follow</dt>
            <dd>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">@neilspattyclub</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
