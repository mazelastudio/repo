import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--1"></span>
        <span className="hero__orb hero__orb--2"></span>
        <span className="hero__orb hero__orb--3"></span>
        <span className="hero__grain"></span>
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">{profile.studio} · Istanbul</p>

          <h1 className="hero__name">
            Elaheh
            <span className="hero__name-last">Sheikhalizadeh</span>
          </h1>

          <ul className="hero__titles">
            {profile.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#gallery" className="btn btn--solid">
              View the Gallery
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>

        <a href="#gallery" className="hero__gallery" aria-label="View the gallery">
          <figure className="hero__frame hero__frame--back">
            <img
              src="/gallery/insta/DQM9ZP0DFla.jpg"
              alt="Beneath the Skin of Light — surrealist painting"
              loading="eager"
            />
          </figure>
          <figure className="hero__frame hero__frame--front">
            <img
              src="/gallery/insta/DQL4YlwDIfC.jpg"
              alt="Subconscious — The Raven, surrealist painting"
              fetchpriority="high"
            />
            <figcaption className="hero__frame-cap">
              <span>Subconscious — The Raven</span>
              <span className="hero__frame-meta">Charcoal &amp; acrylic</span>
            </figcaption>
          </figure>
        </a>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to content">
        <span></span>
        Scroll
      </a>
    </section>
  )
}
