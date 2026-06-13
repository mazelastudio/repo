import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const year = 2026

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">M</span>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__role">{profile.titles.join(' · ')}</p>
          </div>
        </div>

        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
      <div className="container footer__base">
        <span>
          © {year} {profile.studio}. All works and rights reserved.
        </span>
        <span>Istanbul · Designed with care.</span>
      </div>
    </footer>
  )
}
