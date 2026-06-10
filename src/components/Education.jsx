import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
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

function Pill({ children }) {
  return (
    <span
      style={{
        background: 'var(--accent-lighter)',
        color: 'var(--accent)',
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.7rem',
        borderRadius: '20px',
        padding: '3px 12px',
      }}
    >
      {children}
    </span>
  )
}

export default function Education() {
  const tilt1 = useTilt()
  const tilt2 = useTilt()
  const tiltHonors = useTilt()
  const Wrap = noMotion ? 'div' : motion.div

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
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
            >
              <span className="eyebrow">Background</span>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-primary)',
                }}
              >
                Education & Honors
              </h2>
            </Wrap>

            {/* Timeline */}
            <Wrap
              {...(noMotion
                ? {}
                : {
                    variants: staggerContainer,
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: true, amount: 0.1 },
                  })}
            >
              <div
                style={{
                  position: 'relative',
                  paddingLeft: '52px',
                  marginTop: '32px',
                }}
              >
                <div className="timeline-line" />

                {/* Entry 1 — BS SE */}
                <Wrap
                  {...(noMotion ? {} : { variants: staggerItem })}
                  style={{ position: 'relative', marginBottom: '40px' }}
                >
                  <div className="timeline-dot" style={{ top: '6px' }} />
                  <div
                    ref={tilt1.ref}
                    onMouseMove={tilt1.onMouseMove}
                    onMouseLeave={tilt1.onMouseLeave}
                    className="card-base p-4"
                  >
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-2">
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        BS Software Engineering
                      </div>
                      <Pill>Feb 2023 – Present</Pill>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        marginTop: '4px',
                        fontSize: '0.9rem',
                      }}
                    >
                      Capital University of Science & Technology (CUST)
                    </div>
                    <div className="d-flex gap-2 mt-2 flex-wrap">
                      <Pill>7th Semester</Pill>
                      <Pill>CGPA 3.67 / 4.00</Pill>
                    </div>
                    <ul
                      style={{
                        marginTop: '12px',
                        paddingLeft: '18px',
                        marginBottom: 0,
                      }}
                    >
                      <li
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '4px',
                        }}
                      >
                        Specializing in React.js, web development, and software
                        design
                      </li>
                      <li
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        Recipient of Dean's Roll of Honor for 6 consecutive
                        semesters
                      </li>
                    </ul>
                  </div>
                </Wrap>

                {/* Entry 2 — ICS */}
                <Wrap
                  {...(noMotion ? {} : { variants: staggerItem })}
                  style={{ position: 'relative', marginBottom: '40px' }}
                >
                  <div className="timeline-dot" style={{ top: '6px' }} />
                  <div
                    ref={tilt2.ref}
                    onMouseMove={tilt2.onMouseMove}
                    onMouseLeave={tilt2.onMouseLeave}
                    className="card-base p-4"
                  >
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      ICS – Computer Science
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        marginTop: '4px',
                        fontSize: '0.9rem',
                      }}
                    >
                      Askaria College for Women
                    </div>
                  </div>
                </Wrap>
              </div>
            </Wrap>

            {/* Honors card */}
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
                ref={tiltHonors.ref}
                onMouseMove={tiltHonors.onMouseMove}
                onMouseLeave={tiltHonors.onMouseLeave}
                className="card-base p-4 mt-2 d-flex align-items-start gap-3"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(5,150,105,0.04), rgba(16,185,129,0.02))',
                  borderColor: 'var(--border-accent)',
                }}
              >
                <Trophy
                  size={28}
                  style={{
                    color: 'var(--accent)',
                    flexShrink: 0,
                    marginTop: '4px',
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Dean's Roll of Honor
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginTop: '4px',
                      lineHeight: 1.6,
                    }}
                  >
                    Awarded for academic excellence across 6 consecutive semesters
                    at CUST, consistently maintaining a CGPA of 3.67/4.00
                  </div>
                </div>
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    </section>
  )
}
