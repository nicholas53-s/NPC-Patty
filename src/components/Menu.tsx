import { useCallback, useRef, useState } from 'react'
import { MENU, MENU_TABS, MENU_SECTION, waLink, type MenuType } from '../data'

function CardImg({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const refCb = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true)
  }, [])
  return (
    <div className={`menu-card__imgwrap ${loaded ? 'is-loaded' : 'is-loading'}`}>
      <img
        ref={refCb}
        className="menu-card__img"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function Menu() {
  const [type, setType] = useState<MenuType>('burger')
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev' | 'none'>('none')
  const touchStartX = useRef<number | null>(null)

  const items = MENU[type]
  const count = items.length
  const multi = count > 1

  const switchType = (t: MenuType) => {
    if (t === type) return
    setType(t)
    setIndex(0)
    setDir('none')
  }

  const go = (delta: number) => {
    if (!multi) return
    setDir(delta > 0 ? 'next' : 'prev')
    setIndex((p) => (p + delta + count) % count)
  }
  const goTo = (d: number) => {
    setDir(d > index ? 'next' : 'prev')
    setIndex(d)
  }

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
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
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

      {/* type toggle: Burgers / Fries */}
      <div className="menu__tabs" role="tablist">
        {MENU_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`menu__tab ${type === tab.id ? 'is-active' : ''}`}
            onClick={() => switchType(tab.id)}
            role="tab"
            aria-selected={type === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="menu__carousel"
        key={type}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, i) => {
          const o = offsetOf(i)
          const active = o === 0
          return (
            <article
              key={`${type}-${item.name}`}
              className={`menu-card ${posClass(o)} ${active ? `dir-${dir}` : ''}`}
              aria-hidden={!active}
              onClick={() => !active && goTo(i)}
            >
              <CardImg src={item.image} alt={item.name} />
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

      {multi && (
        <div className="menu__controls">
          <button className="menu__nav" onClick={() => go(-1)} aria-label="Previous">
            &#8249;
          </button>
          <div className="menu__dots" role="tablist">
            {items.map((m, d) => (
              <button
                key={m.name}
                className={`menu__dot ${d === index ? 'is-active' : ''}`}
                onClick={() => goTo(d)}
                aria-label={`Show ${m.name}`}
                aria-selected={d === index}
              />
            ))}
          </div>
          <button className="menu__nav" onClick={() => go(1)} aria-label="Next">
            &#8250;
          </button>
        </div>
      )}
      {multi && <p className="menu__hint">Swipe to explore the lineup</p>}
    </section>
  )
}
