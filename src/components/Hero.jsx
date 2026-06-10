import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import ayeshaImg from '../assets/ayesha-profile-real.jpg'

const noMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
}

export default function Hero() {
  const text = useTypewriter([
    'React Developer',
    'Software Engineer',
    'VR Developer',
    'Web Developer',
  ])

  const Wrap = noMotion ? 'div' : motion.div

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      {/* Background blobs */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, pointerEvents: 'none' }}
      >
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '700px',
            height: '700px',
            top: '-150px',
            right: '-150px',
            background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '500px',
            height: '500px',
            bottom: '-100px',
            left: '5%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'radial-gradient(rgba(5,150,105,0.06) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center justify-content-between g-5">
          {/* Left */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <Wrap
              {...(noMotion
                ? {}
                : {
                    variants: staggerContainer,
                    initial: 'hidden',
                    animate: 'visible',
                  })}
            >
              {/* Status pill */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--accent-lighter)',
                    border: '1px solid rgba(5,150,105,0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    marginBottom: '20px',
                  }}
                >
                  <span className="dot-pulse" />
                  Available for opportunities
                </span>
              </Wrap>

              {/* Name */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <div style={{ marginBottom: '16px' }}>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                    }}
                  >
                    Hi, I'm
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                      color: 'var(--accent)',
                      lineHeight: 1.05,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Ayesha Babar
                  </div>
                </div>
              </Wrap>

              {/* Typewriter */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <div
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                    minHeight: '1.6rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>$ </span>
                  <span style={{ color: 'var(--accent)' }}>{text}</span>
                  <span className="cursor" />
                </div>
              </Wrap>

              {/* Bio */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '480px',
                    marginBottom: '28px',
                  }}
                >
                  Software Engineering student specializing in React.js and modern
                  web development. Passionate about combining structured engineering
                  with vibe coding to rapidly translate ideas into polished,
                  responsive, and user-focused digital experiences.
                </p>
              </Wrap>

              {/* Buttons */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    className="btn-emerald"
                    onClick={() =>
                      document
                        .getElementById('projects')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    View My Work
                  </button>
                  <button className="btn-outline-emerald">Download CV</button>
                </div>
              </Wrap>

              {/* Stats */}
              <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    marginTop: '40px',
                  }}
                >
                  {[
                    { value: '3.67', label: 'CGPA' },
                    { value: '4', label: 'PROJECTS' },
                    { value: '6', label: 'HONORS' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        textAlign: 'center',
                        minWidth: '100px',
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: '2rem',
                          color: 'var(--accent)',
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Fira Code', monospace",
                          fontSize: '0.6rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          marginTop: '4px',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Wrap>
            </Wrap>
          </div>

          {/* Right — photo */}
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <Wrap
              {...(noMotion
                ? {}
                : {
                    variants: fadeUp,
                    initial: 'hidden',
                    animate: 'visible',
                  })}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                {/* Glow ring */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-1px',
                    borderRadius: '24px',
                    background:
                      'linear-gradient(135deg, rgba(5,150,105,0.2) 0%, transparent 60%)',
                    zIndex: 0,
                  }}
                />

                <img
                  src={ayeshaImg}
                  alt="Ayesha Babar"
                  className="photo-ring"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    borderRadius: '24px',
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                  }}
                />

                {/* Dean's Honor badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 2,
                    background: '#ffffff',
                    border: '1px solid var(--border-accent)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span className="dot-pulse" />
                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.72rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Dean's Honor
                  </span>
                </div>

                {/* CGPA badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    zIndex: 2,
                    background: '#ffffff',
                    border: '1px solid var(--border-accent)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.72rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    🎓 CGPA 3.67 / 4.00
                  </span>
                </div>
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    </section>
  )
}
