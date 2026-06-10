import { useState, useEffect, useMemo } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = ['about', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const active = useActiveSection(useMemo(() => sectionIds, []))
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        height: '64px',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'var(--bg-primary)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: 'var(--shadow-sm)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="container">
        <a
          className="navbar-brand p-0 m-0 text-decoration-none"
          href="#home"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            color: 'var(--accent)',
            fontSize: '1.4rem',
          }}
        >
          AB
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: 'var(--accent)' }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-2 mt-3 mt-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className={`nav-link nav-link-custom ${active === link.href.slice(1) ? 'active' : ''}`}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn-emerald text-decoration-none d-inline-block"
                style={{
                  borderRadius: '8px',
                  padding: '8px 20px',
                  fontSize: '0.85rem',
                }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
