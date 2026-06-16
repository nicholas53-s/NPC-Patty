import { useState } from 'react'
import { waLink } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <a className="nav__brand" href="#top" onClick={close}>
        <img className="nav__logo" src="/logos/npc-octagon.svg" alt="NPC" />
        <span className="nav__name">Neil's Patty Club</span>
      </a>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* dim backdrop behind the mobile drawer */}
      <div
        className={`nav__backdrop ${open ? 'is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        <a href="#menu" onClick={close}>Menu</a>
        <a href="#gallery" onClick={close}>Gallery</a>
        <a href="#story" onClick={close}>Story</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a className="nav__cta" href={waLink} target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
      </nav>
    </header>
  )
}
