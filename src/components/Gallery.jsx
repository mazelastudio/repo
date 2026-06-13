import { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { galleryItems, categories, ig } from '../data/gallery'
import { makePlaceholder } from '../utils/placeholder'
import { useReveal } from '../hooks/useReveal'
import './Gallery.css'

function resolveSrc(item) {
  return item.src || makePlaceholder(item.id, item.palette)
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index into `visible` or null
  const touch = useRef({ x: 0, y: 0 })

  const visible = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((it) => it.category === filter),
    [filter]
  )

  // Re-run reveal observer whenever the filtered set changes.
  useReveal([filter])

  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  )
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  )

  // Keyboard controls + lock scroll while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, next, prev])

  // Touch swipe for mobile (left/right to navigate, fast down-swipe to close).
  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev()
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) {
      close()
    }
  }

  const active = lightbox === null ? null : visible[lightbox]

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="gallery__head reveal">
          <div>
            <p className="eyebrow">Selected Works</p>
            <h2 className="section-title">The Gallery</h2>
          </div>
          <p className="lead gallery__intro">
            Original paintings, the <em>Subconscious</em> series and large-scale
            murals — drawn from the studio. Tap any piece to view it larger.
          </p>
        </div>

        <div
          className="gallery__filters reveal"
          role="tablist"
          aria-label="Filter works"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`gallery__filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {visible.map((item, i) => (
            <button
              key={item.id}
              className="gallery__item reveal"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              onClick={() => setLightbox(i)}
              aria-label={`View ${item.title}`}
            >
              <span className="gallery__media">
                <img
                  src={resolveSrc(item)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery__hover">View</span>
              </span>
              <span className="gallery__meta">
                <span className="gallery__title">{item.title}</span>
                <span className="gallery__sub">
                  {item.category} · {item.year}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ×
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={resolveSrc(active)} alt={active.title} />
            <figcaption className="lightbox__caption">
              <span className="lightbox__title">{active.title}</span>
              <span className="lightbox__detail">
                {active.medium} · {active.year}
              </span>
              {active.shortcode && (
                <a
                  className="lightbox__link"
                  href={ig(active.shortcode)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on Instagram ↗
                </a>
              )}
            </figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next"
          >
            ›
          </button>

          <span className="lightbox__count">
            {lightbox + 1} / {visible.length}
          </span>
        </div>
      )}
    </section>
  )
}
