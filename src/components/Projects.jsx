import { motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
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

const projects = [
  {
    num: '01',
    title: 'Immersive VR Environment',
    inProgress: true,
    banner: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    tech: ['Unity 3D', 'Kotlin', 'Firebase', 'Agora SDK', 'Photon Fusion 2'],
    points: [
      'Mobile multiplayer 3D VR for Google Cardboard headsets',
      'Targets developing regions, removes expensive hardware barrier',
    ],
  },
  {
    num: '02',
    title: 'University Sports Portal',
    inProgress: false,
    banner: 'linear-gradient(135deg, #cffafe, #a5f3fc)',
    tech: ['ASP.NET MVC', 'C#', 'Bootstrap 5', 'MS SQL Server'],
    points: [
      'Secure role-based web app for university sports scheduling',
      'Full database schema with multi-level access control',
    ],
  },
  {
    num: '03',
    title: 'EcoHabit Builder',
    inProgress: false,
    banner: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
    tech: ['Java', 'Android Studio', 'SQLite'],
    points: [
      'Gamified Android habit tracker for eco-friendly routines',
      'SQLite persistence + personalized impact reports',
    ],
  },
  {
    num: '04',
    title: 'Give and Grow Platform',
    inProgress: false,
    banner: 'linear-gradient(135deg, #d1fae5, #6ee7b7)',
    tech: ['Web Development', 'SDLC', 'Requirements Engineering'],
    points: [
      'Community engagement platform, led end-to-end as project lead',
      'Cross-functional team coordination from planning to deployment',
    ],
  },
]

function ProjectCard({ project }) {
  const tilt = useTilt()

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-base h-100 d-flex flex-column"
      style={{ overflow: 'hidden' }}
    >
      {/* Banner */}
      <div
        style={{
          height: '80px',
          background: project.banner,
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            fontFamily: "'Fira Code', monospace",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--accent)',
            opacity: 0.4,
          }}
        >
          {project.num}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        {project.inProgress && (
          <span
            style={{
              background: '#fef3c7',
              color: '#92400e',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.68rem',
              padding: '3px 10px',
              borderRadius: '20px',
              border: '1px solid #fde68a',
              display: 'inline-block',
              marginBottom: '8px',
              alignSelf: 'flex-start',
            }}
          >
            🔬 IN PROGRESS
          </span>
        )}

        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}
        >
          {project.title}
        </div>

        {/* Tech tags */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.7rem',
                padding: '3px 10px',
                borderRadius: '20px',
                color: 'var(--text-secondary)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bullet points */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flex: 1,
          }}
        >
          {project.points.map((point, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '6px',
              }}
            >
              → {point}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="d-flex justify-content-between align-items-center pt-3 mt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <a
            href="#"
            style={{
              color: 'var(--accent)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            View Project
          </a>
          <div className="d-flex gap-3">
            <a
              href="#"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const Wrap = noMotion ? 'div' : motion.div

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container">
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
          <span className="eyebrow">My Work</span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Projects
          </h2>
        </Wrap>

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
          <div className="row g-4 mt-4">
            {projects.map((project, i) => (
              <div className="col-12 col-md-6" key={i}>
                <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                  <ProjectCard project={project} />
                </Wrap>
              </div>
            ))}
          </div>
        </Wrap>
      </div>
    </section>
  )
}
