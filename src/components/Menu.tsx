import { useRef, useState } from 'react'
import { MENU, MENU_SECTION, waLink } from '../data'

export default function Menu() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const count = MENU.length
  const touchStartX = useRef<number | null>(null)

  const go = (delta: number) => {
    setDir(delta > 0 ? 'next' : 'prev')
    setIndex((p) => (p + delta + count) % count)
  }
  const goTo = (d: number) => {
    setDir(d > index ? 'next' : 'prev')
    setIndex(d)
  }

  // Position of card `i` relative to the active one, wrapped to [-half, half].
  const offsetOf = (i: number) => {
    let o = i - index
    const half = Math.floor(count / 2)
    if (o > half) o -= count
    if (o < -half) o += count
    return o
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1) // swipe left = next
    touchStartX.current = null
  }

  const posClass = (o: number) =>
    o === 0 ? 'is-active' : o === -1 ? 'is-left' : o === 1 ? 'is-right' : 'is-hidden'

  return (
    <section id="menu" className="menu">
      <div className="section-head">
        <span className="kicker">{MENU_SECTION.kicker}</span>
        <h2 className="section-title">{MENU_SECTION.title}</h2>
        <p className="section-note">{MENU_SECTION.note}</p>
      </div>

      <div
        className="menu__carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {MENU.map((item, i) => {
          const o = offsetOf(i)
          const active = o === 0
          return (
            <article
              key={item.name}
              className={`menu-card ${posClass(o)} ${active ? `dir-${dir}` : ''}`}
              aria-hidden={!active}
              onClick={() => !active && goTo(i)}
            >
              <div className="menu-card__imgwrap">
                <img
                  className="menu-card__img"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <h3 className="menu-card__name">{item.name}</h3>
              <p className="menu-card__desc">{item.note}</p>
              <p className="menu-card__price">{item.price}</p>
              <a
                className="btn btn--solid"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                tabIndex={active ? 0 : -1}
              >
                Order on WhatsApp
              </a>
            </article>
          )
        })}
      </div>

      <div className="menu__controls">
        <button
          className="menu__nav"
          onClick={() => go(-1)}
          aria-label="Previous burger"
        >
          &#8249;
        </button>
        <div className="menu__dots" role="tablist">
          {MENU.map((m, d) => (
            <button
              key={m.name}
              className={`menu__dot ${d === index ? 'is-active' : ''}`}
              onClick={() => goTo(d)}
              aria-label={`Show ${m.name}`}
              aria-selected={d === index}
            />
          ))}
        </div>
        <button
          className="menu__nav"
          onClick={() => go(1)}
          aria-label="Next burger"
        >
          &#8250;
        </button>
      </div>
      <p className="menu__hint">Swipe to explore the lineup</p>
    </section>
  )
}
