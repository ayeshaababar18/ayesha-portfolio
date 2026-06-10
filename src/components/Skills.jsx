import { motion } from 'framer-motion'
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

const skillsData = [
  {
    title: 'Web Technologies',
    dotColor: 'var(--accent)',
    skills: ['React.js', 'JavaScript', 'ASP.NET MVC', 'AngularJS', 'Bootstrap 5'],
  },
  {
    title: 'Programming',
    dotColor: '#0891b2',
    skills: ['Java', 'C#', 'C++', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Tools & Methods',
    dotColor: '#7c3aed',
    skills: [
      'Git/GitHub',
      'Firebase',
      'Figma',
      'Agile/Jira',
      'UI/UX Design',
      'Req. Engineering',
      'Generative AI',
    ],
  },
]

function SkillCard({ category }) {
  const tilt = useTilt()
  const Wrap = noMotion ? 'div' : motion.div

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-base p-4 h-100"
    >
      <div className="d-flex align-items-center gap-2 mb-3">
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: category.dotColor,
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-primary)',
          }}
        >
          {category.title}
        </span>
      </div>
      <Wrap
        {...(noMotion
          ? {}
          : {
              variants: staggerContainer,
              initial: 'hidden',
              whileInView: 'visible',
              viewport: { once: true },
            })}
        className="d-flex flex-wrap gap-2 mt-3"
      >
        {category.skills.map((skill, j) => (
          <Wrap key={j} {...(noMotion ? {} : { variants: staggerItem })}>
            <span className="skill-badge">{skill}</span>
          </Wrap>
        ))}
      </Wrap>
    </div>
  )
}

export default function Skills() {
  const Wrap = noMotion ? 'div' : motion.div

  return (
    <section id="skills" className="section-padding">
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
          <span className="eyebrow">What I Work With</span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Technical Skills
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
            {skillsData.map((cat, i) => (
              <div className="col-12 col-md-4" key={i}>
                <Wrap {...(noMotion ? {} : { variants: staggerItem })}>
                  <SkillCard category={cat} />
                </Wrap>
              </div>
            ))}
          </div>
        </Wrap>
      </div>
    </section>
  )
}
