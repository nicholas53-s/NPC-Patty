import { useCallback, useState } from 'react'
import { GALLERY, GALLERY_SECTION, type GalleryTile } from '../data'

function Tile({ tile }: { tile: GalleryTile }) {
  const [loaded, setLoaded] = useState(false)
  // Handle images already cached on mount (onLoad may not fire for those).
  const refCb = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true)
  }, [])

  return (
    <figure
      className={`tile tile--${tile.theme} ${loaded ? 'is-loaded' : 'is-loading'}`}
    >
      <img
        ref={refCb}
        className="tile__img"
        src={tile.src}
        alt={tile.alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
      <span className="tile__badge">NPC</span>
    </figure>
  )
}

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
          <Tile key={tile.src} tile={tile} />
        ))}
      </div>
    </section>
  )
}
