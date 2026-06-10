import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Immersive VR Environment",
    inProgress: true,
    banner: "linear-gradient(135deg, #064e3b, #065f46)",
    tech: ["Unity 3D", "Kotlin", "Firebase", "Agora SDK", "Photon Fusion 2"],
    points: [
      "Developing a mobile-based multiplayer 3D virtual environment with real-time voice communication for Google Cardboard VR headsets",
      "Targeting users in developing regions by removing the barrier of expensive hardware for immersive experiences"
    ]
  },
  {
    title: "University Sports Portal",
    inProgress: false,
    banner: "linear-gradient(135deg, #052e16, #064e3b)",
    tech: ["ASP.NET MVC", "C#", "Bootstrap 5", "MS SQL Server"],
    points: [
      "Engineered a secure, role-based web app to manage and schedule university sports events across multiple user tiers",
      "Designed full database schema and back-end logic ensuring data integrity and multi-level access control"
    ]
  },
  {
    title: "EcoHabit Builder",
    inProgress: false,
    banner: "linear-gradient(135deg, #022c22, #064e3b)",
    tech: ["Java", "Android Studio", "SQLite"],
    points: [
      "Built a native Android app with gamified task tracking and daily habit management to promote eco-friendly routines",
      "Implemented persistent local storage via SQLite and personalized impact reports to sustain user engagement"
    ]
  },
  {
    title: "Give and Grow Platform",
    inProgress: false,
    banner: "linear-gradient(135deg, #064e3b, #047857)",
    tech: ["Web Development", "SDLC", "Requirements Engineering"],
    points: [
      "Led end-to-end development of a community engagement web platform from stakeholder requirements through full deployment",
      "Coordinated cross-functional team efforts as project lead across planning, design, development, and delivery"
    ]
  }
];

export default function Projects() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sectionVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="projects" className="section-padding position-relative">
      <div className="container">
        
        <motion.div 
          initial={prefersReducedMotion ? "visible" : "hidden"} 
          whileInView="visible" 
          viewport={{ once: true, margin: "-60px" }} 
          variants={sectionVariants}
          className="mb-5"
        >
          <div className="eyebrow">MY WORK</div>
          <h2 className="text-white" style={{ fontSize: "2.5rem" }}>Projects</h2>
        </motion.div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, i) => (
            <div className="col-md-6" key={i}>
              <motion.div variants={itemVariants} className="h-100">
                <TiltCard 
                  className="glow-border h-100 d-flex flex-column" 
                  style={{ 
                    backgroundColor: "var(--bg-card)", 
                    borderRadius: "16px", 
                    overflow: "hidden" 
                  }}
                >
                  {/* Banner */}
                  <div className="position-relative" style={{ height: "72px", background: project.banner }}>
                    {project.inProgress && (
                      <span 
                        className="position-absolute" 
                        style={{ 
                          top: "16px", 
                          right: "16px", 
                          backgroundColor: "rgba(0,0,0,0.5)", 
                          backdropFilter: "blur(4px)", 
                          color: "white", 
                          padding: "4px 10px", 
                          borderRadius: "12px", 
                          fontFamily: "'Fira Code', monospace", 
                          fontSize: "0.7rem", 
                          border: "1px solid rgba(255,255,255,0.2)" 
                        }}
                      >
                        🔬 IN PROGRESS
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="text-white mb-3" style={{ fontSize: "1.25rem", lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                    
                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, j) => (
                        <div 
                          key={j} 
                          className="skill-badge" 
                          style={{
                            backgroundColor: "rgba(16,185,129,0.08)",
                            border: "1px solid var(--border-accent)",
                            color: "var(--text-secondary)",
                            borderRadius: "20px",
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.78rem",
                            padding: "4px 12px"
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="mb-4 flex-grow-1 ps-3" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      {project.points.map((point, j) => (
                        <li key={j} className="mb-2" style={{ paddingLeft: "4px" }}>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Footer Links */}
                    <div className="mt-auto pt-3 d-flex align-items-center gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                      <a 
                        href="#" 
                        className="text-decoration-none d-flex align-items-center gap-2" 
                        style={{ color: "var(--text-muted)", transition: "color 0.2s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)" }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
                      >
                        <Globe size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="text-decoration-none d-flex align-items-center gap-2" 
                        style={{ color: "var(--text-muted)", transition: "color 0.2s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)" }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
