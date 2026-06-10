import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Globe2, Globe, MapPin } from 'lucide-react'
import { useTilt } from '../utils/tiltEffect'

const noMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'ayeshaababar18@gmail.com',
    href: 'mailto:ayeshaababar18@gmail.com',
  },
  {
    icon: Globe2,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/ayeshababar18',
    href: 'https://linkedin.com/in/ayeshababar18',
  },
  {
    icon: Globe,
    label: 'GITHUB',
    value: 'github.com/ayeshaababar18',
    href: 'https://github.com/ayeshaababar18',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Rawalpindi, Pakistan 🇵🇰',
    href: null,
  },
]

function InfoCard({ info }) {
  const tilt = useTilt()
  const Tag = info.href ? 'a' : 'div'
  const linkProps = info.href
    ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      {...linkProps}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-base p-3 d-flex align-items-center gap-3 text-decoration-none"
      style={{ display: 'flex' }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'var(--accent-lighter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <info.icon size={18} style={{ color: 'var(--accent)' }} />
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          {info.label}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '0.88rem',
            color: 'var(--text-primary)',
            marginTop: '2px',
          }}
        >
          {info.value}
        </div>
      </div>
    </Tag>
  )
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const formTilt = useTilt()
  const Wrap = noMotion ? 'div' : motion.div

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      e.target.reset()
      setTimeout(() => setShowToast(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container">
        {/* Heading */}
        <Wrap
          {...(noMotion
            ? {}
            : {
                variants: fadeUp,
                initial: 'hidden',
                whileInView: 'visible',
                viewport: { once: true, amount: 0.15 },
              })}
          className="text-center mb-5"
        >
          <span className="eyebrow">Get In Touch</span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              marginTop: '8px',
            }}
          >
            Open to internships, collaborations, and freelance projects.
          </p>
        </Wrap>

        <div className="row g-5 justify-content-center">
          {/* Left — info cards */}
          <div className="col-12 col-lg-4">
            <Wrap
              {...(noMotion
                ? {}
                : {
                    variants: staggerContainer,
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: true, amount: 0.1 },
                  })}
              className="d-flex flex-column gap-3"
            >
              {contactInfo.map((info, i) => (
                <Wrap key={i} {...(noMotion ? {} : { variants: staggerItem })}>
                  <InfoCard info={info} />
                </Wrap>
              ))}
            </Wrap>
          </div>

          {/* Right — form */}
          <div className="col-12 col-lg-6">
            <Wrap
              {...(noMotion
                ? {}
                : {
                    variants: fadeUp,
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: true, amount: 0.15 },
                  })}
            >
              <div
                ref={formTilt.ref}
                onMouseMove={formTilt.onMouseMove}
                onMouseLeave={formTilt.onMouseLeave}
                className="card-base p-4 p-md-5"
              >
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '0.85rem',
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                          display: 'block',
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: '0.85rem',
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                          display: 'block',
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        display: 'block',
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        display: 'block',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="form-input"
                      placeholder="Your message..."
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-emerald w-100 mt-3"
                    style={{ borderRadius: '10px', padding: '14px' }}
                  >
                    {isSubmitting ? (
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </Wrap>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="toast-success"
          >
            <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span>
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
