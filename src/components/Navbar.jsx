import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Disciplines' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#motion', label: 'In Motion' },
  { href: '#voice', label: 'Voice & Media' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)} aria-label="Mazela Studio — home">
          <img
            className="nav__brand-mark nav__brand-mark--light"
            src="/brand/mazela-mark-light.png"
            alt=""
          />
          <img
            className="nav__brand-mark nav__brand-mark--dark"
            src="/brand/mazela-mark.png"
            alt=""
          />
          <span className="nav__brand-text">Mazela&nbsp;Studio</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
