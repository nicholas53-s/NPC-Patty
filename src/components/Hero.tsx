import { HERO, STAR, waLink } from '../data'

export default function Hero() {
  const frames = [...HERO.slides, HERO.slides[0]]
  const n = frames.length

  return (
    <section id="top" className="hero">
      <div className="hero__slides" style={{ width: `${n * 100}%` }}>
        {frames.map((src, i) => (
          <div
            key={i}
            className="hero__slide"
            style={{ width: `${100 / n}%`, backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__inner">
        <img className="hero__emblem" src="/logos/npc-burger-cream.svg" alt="Neil's Patty Club" />
        <p className="hero__eyebrow">{STAR} {HERO.eyebrow} {STAR}</p>
        <h1 className="hero__title">
          {HERO.titleLine1}
          <br />
          {HERO.titleLine2}
        </h1>
        <p className="hero__sub">{HERO.sub}</p>
        <p className="hero__body">{HERO.body}</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href={waLink} target="_blank" rel="noreferrer">
            {HERO.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#menu">{HERO.ctaSecondary}</a>
        </div>
      </div>
    </section>
  )
}
