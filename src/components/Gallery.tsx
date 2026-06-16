import { GALLERY, GALLERY_SECTION } from '../data'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-head">
        <span className="kicker">{GALLERY_SECTION.kicker}</span>
        <h2 className="section-title">{GALLERY_SECTION.title}</h2>
        <p className="section-note">{GALLERY_SECTION.note}</p>
      </div>
      <div className="gallery__grid">
        {GALLERY.map((tile) => (
          <figure key={tile.src} className={`tile tile--${tile.theme}`}>
            <img
              className="tile__img"
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
            />
            <span className="tile__badge">NPC</span>
          </figure>
        ))}
      </div>
    </section>
  )
}
