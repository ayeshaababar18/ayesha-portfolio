import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Globe2, ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        paddingTop: '48px',
        paddingBottom: '24px',
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Branding */}
          <div className="col-md-4">
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                color: 'var(--accent)',
                fontSize: '1.4rem',
              }}
            >
              AB
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-primary)',
                marginTop: '4px',
              }}
            >
              Ayesha Babar
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginTop: '4px',
              }}
            >
              Software Engineering Student @ CUST
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-md-center">
            <div
              className="d-flex flex-column gap-2"
              style={{ alignItems: 'center' }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = 'var(--accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = 'var(--text-secondary)')
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="col-md-4 d-flex flex-column align-items-md-end">
            <div className="d-flex gap-3 align-items-center">
              <a
                href="https://github.com/ayeshaababar18"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--accent)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                <Globe size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ayeshababar18"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--accent)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                <Globe2 size={20} />
              </a>
            </div>

            {/* Back to top */}
            <AnimatePresence>
              {showTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="d-flex align-items-center justify-content-center mt-3"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--border)',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                    color: 'var(--accent)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      'var(--accent-lighter)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'transparent')
                  }
                >
                  <ArrowUp size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="text-center"
          style={{
            borderTop: '1px solid var(--border)',
            marginTop: '32px',
            paddingTop: '24px',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}
          >
            © 2025 Ayesha Babar · Built with React & Bootstrap
          </span>
        </div>
      </div>
    </footer>
  )
}
