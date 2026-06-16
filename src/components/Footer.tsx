import { STAR, FOOTER } from '../data'

export default function Footer() {
  const { nameNote } = FOOTER
  return (
    <footer className="footer">
      <div className="footer__check" aria-hidden="true" />
      <div className="footer__inner">
        <img className="footer__logo" src="/logos/npc-octagon.svg" alt="NPC" />
        <p className="footer__line">
          {STAR} {FOOTER.tagline} {STAR}
        </p>
        <p className="footer__aside">
          {nameNote.prefix} <strong>{nameNote.brand}</strong> {nameNote.suffix}
        </p>
        <p className="footer__small">
          © {new Date().getFullYear()} Neil's Patty Club. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
