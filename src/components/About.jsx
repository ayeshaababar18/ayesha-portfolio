import { motion } from 'framer-motion'
import { Mail, MapPin, GraduationCap, Award, Code2, Glasses, Palette } from 'lucide-react'
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

const valueCards = [
  {
    icon: Code2,
    title: 'React.js Focus',
    desc: 'Specializing in React and modern JS frameworks',
  },
  {
    icon: Glasses,
    title: 'VR Innovation',
    desc: 'Building immersive mobile VR for accessible hardware',
  },
  {
    icon: Palette,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, well-documented code',
  },
]

const quickInfo = [
  { icon: Mail, label: 'ayeshaababar18@gmail.com' },
  { icon: MapPin, label: 'Rawalpindi, Pakistan' },
  { icon: GraduationCap, label: 'CUST, 7th Semester' },
  { icon: Award, label: "Dean's Roll of Honor" },
]

function ValueCard({ icon: Icon, title, desc }) {
  const tilt = useTilt()
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-base p-4 text-center h-100"
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background: 'var(--accent-lighter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
        }}
      >
        <Icon size={22} style={{ color: 'var(--accent)' }} />
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '4px',
        }}
      >
        {desc}
      </div>
    </div>
  )
}

export default function About() {
  const Wrap = noMotion ? 'div' : motion.div

  return (
    <section id="about" className="section-padding section-alt">
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
              <span className="eyebrow">About Me</span>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}
              >
                Turning ideas into{' '}
                <span className="gradient-text">digital reality</span>
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                Software Engineering student specializing in React.js and modern
                web development. Passionate about combining structured engineering
                with vibe coding to rapidly translate ideas into polished,
                responsive, and user-focused digital experiences.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginTop: '16px',
                }}
              >
                Currently pursuing a BS in Software Engineering at Capital University
                of Science & Technology (CUST) with a CGPA of 3.67/4.00. Recognized
                with the Dean's Roll of Honor for 6 consecutive semesters.
              </p>
            </Wrap>

            {/* Quick Info Grid */}
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
              <div className="row mt-4">
                {quickInfo.map((item, i) => (
                  <div className="col-md-6" key={i}>
                    <div
                      className="d-flex align-items-center gap-2 py-2"
                      style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                    >
                      <item.icon
                        size={16}
                        style={{ color: 'var(--accent)', flexShrink: 0 }}
                      />
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Wrap>

            {/* Value Cards */}
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
              <div className="row mt-4 g-3">
                {valueCards.map((card, i) => (
                  <div className="col-md-4" key={i}>
                    <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                      <ValueCard {...card} />
                    </Wrap>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    </section>
  )
}
