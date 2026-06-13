import { useEffect, useState, useCallback, useRef } from 'react'
import { videoItems } from '../data/videos'
import { ig } from '../data/gallery'
import './VideoGallery.css'

export default function VideoGallery() {
  const [open, setOpen] = useState(null) // index or null
  const videoRef = useRef(null)
  const touch = useRef({ x: 0, y: 0 })

  const close = useCallback(() => setOpen(null), [])
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % videoItems.length)),
    []
  )
  const prev = useCallback(
    () =>
      setOpen((i) =>
        i === null ? i : (i - 1 + videoItems.length) % videoItems.length
      ),
    []
  )

  useEffect(() => {
    if (open === null) return
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
  }, [open, close, next, prev])

  // Try to autoplay (with sound) once the player mounts; browsers that block
  // it simply leave the native controls ready to tap.
  useEffect(() => {
    if (open !== null && videoRef.current) {
      const p = videoRef.current.play()
      if (p && p.catch) p.catch(() => {})
    }
  }, [open])

  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev()
    } else if (dy > 100 && Math.abs(dy) > Math.abs(dx)) {
      close()
    }
  }

  const active = open === null ? null : videoItems[open]

  return (
    <section className="section section--dark videos" id="motion">
      <div className="container">
        <div className="videos__head reveal">
          <p className="eyebrow">In Motion</p>
          <h2 className="section-title">Reels &amp; film</h2>
          <p className="lead">
            The work in movement — brush meeting wall, paintings revealed, and
            performance before the camera. Tap a reel to play.
          </p>
        </div>
      </div>

      <div className="videos__strip">
        {videoItems.map((v, i) => (
          <button
            key={v.id}
            className="vcard reveal"
            onClick={() => setOpen(i)}
            aria-label={`Play ${v.title}`}
          >
            <span className="vcard__media">
              <img src={v.poster} alt={v.title} loading="lazy" decoding="async" />
              <span className="vcard__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
            </span>
            <span className="vcard__meta">
              <span className="vcard__tag">{v.tag}</span>
              <span className="vcard__title">{v.title}</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="vmodal"
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="vmodal__close" onClick={close} aria-label="Close">
            ×
          </button>
          <button
            className="vmodal__nav vmodal__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <figure
            className={`vmodal__figure vmodal__figure--${active.orientation}`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              key={active.id}
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
              loop
              preload="auto"
            />
            <figcaption className="vmodal__caption">
              <span className="vmodal__title">{active.title}</span>
              <span className="vmodal__detail">
                {active.tag} · {active.account}
              </span>
              <a
                className="vmodal__link"
                href={ig(active.shortcode)}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View on Instagram ↗
              </a>
            </figcaption>
          </figure>

          <button
            className="vmodal__nav vmodal__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
