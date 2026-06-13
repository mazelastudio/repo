import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__art"
          src="/gallery/insta/DQM9ZP0DFla.jpg"
          alt=""
          fetchpriority="high"
        />
        <span className="hero__scrim"></span>
        <span className="hero__orb hero__orb--1"></span>
        <span className="hero__orb hero__orb--2"></span>
      </div>

      <div className="container hero__inner">
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

      <a href="#about" className="hero__scroll" aria-label="Scroll to content">
        <span></span>
        Scroll
      </a>
    </section>
  )
}
