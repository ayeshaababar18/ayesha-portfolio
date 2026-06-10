import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import ayeshaImg from '../assets/ayesha-profile-real.jpg';

export default function Hero() {
  const text = useTypewriter([
    'React Developer',
    'Software Engineer', 
    'VR Developer',
    'Web Developer'
  ]);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const itemAnim = (delay, y = 16) => ({
    initial: { opacity: 0, y: y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : delay }
  });

  const opacityAnim = (delay) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : delay }
  });

  return (
    <section id="hero" className="position-relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
      {/* Backgrounds */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="position-absolute rounded-circle" style={{ width: "500px", height: "500px", backgroundColor: "#10B981", opacity: 0.07, top: "-10%", right: "-10%", filter: "blur(120px)" }} />
        <div className="position-absolute rounded-circle" style={{ width: "400px", height: "400px", backgroundColor: "#14B8A6", opacity: 0.05, top: "30%", left: "-10%", filter: "blur(100px)" }} />
        <div className="position-absolute rounded-circle" style={{ width: "300px", height: "300px", backgroundColor: "#10B981", opacity: 0.06, bottom: "-5%", right: "10%", filter: "blur(80px)" }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="container-fluid px-5 position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center justify-content-center g-5">
          
          {/* Left Column */}
          <div className="col-lg-6 order-2 order-lg-1">
            
            {/* Status Pill */}
            <motion.div {...itemAnim(0.1, 16)}>
              <div className="d-inline-flex align-items-center gap-2 mb-4" style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.85rem", border: "1px solid var(--border-accent)", borderRadius: "20px", backgroundColor: "rgba(16,185,129,0.05)", padding: "6px 14px" }}>
                <span className="position-relative d-flex" style={{ width: "8px", height: "8px" }}>
                  <span className="position-absolute w-100 h-100 rounded-circle opacity-75" style={{ backgroundColor: "var(--accent)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                  <span className="position-relative w-100 h-100 rounded-circle" style={{ backgroundColor: "var(--accent)" }} />
                </span>
                <span style={{ color: "var(--accent-light)" }}>Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <h1 className="mb-3" style={{ fontSize: "clamp(1.8rem, 6vw, 2.4rem)", "@media (minWidth: 576px)": { fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }, lineHeight: 1.1 }}>
              <motion.div {...itemAnim(0.2, 20)}>
                <span className="text-white d-block">Hi, I'm </span>
              </motion.div>
              <motion.div {...itemAnim(0.3, 20)}>
                <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>Ayesha Babar</span>
              </motion.div>
            </h1>

            {/* Typewriter */}
            <motion.div {...opacityAnim(0.4)}>
              <div className="mb-4" style={{ fontFamily: "'Fira Code', monospace", fontSize: "1.1rem" }}>
                <span style={{ color: "var(--text-muted)" }}>$ </span>
                <span style={{ color: "var(--accent-light)" }}>{text}</span>
                <span className="cursor"></span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div {...itemAnim(0.45, 16)}>
              <p className="mb-4" style={{ color: "var(--text-secondary)", maxWidth: "480px", lineHeight: 1.6 }}>
                Software Engineering student specializing in React.js and modern web development. Passionate about combining structured engineering with vibe coding to rapidly translate ideas into polished, responsive, and user-focused digital experiences.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div {...itemAnim(0.5, 16)}>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#projects" className="btn btn-primary-custom text-decoration-none border-0" style={{ backgroundColor: "var(--accent)", color: "#000", fontFamily: "'Outfit', sans-serif", fontWeight: 600, borderRadius: "8px", padding: "0.5rem 1.5rem" }}>
                  View My Work
                </a>
                <a href="#contact" className="btn text-decoration-none" style={{ border: "1px solid var(--border)", color: "var(--text-secondary)", backgroundColor: "transparent", borderRadius: "8px", padding: "0.5rem 1.5rem", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-secondary)"; }}
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div {...itemAnim(0.6, 16)}>
              <div className="d-flex flex-wrap gap-3 mt-4">
                {[
                  { value: "3.67", label: "CGPA" },
                  { value: "4", label: "PROJECTS" },
                  { value: "6", label: "HONORS" }
                ].map((stat, i) => (
                  <div className="glass-card text-center flex-fill" key={i} style={{ minWidth: "120px", padding: "20px 16px", border: "1px solid var(--border)" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "2rem", color: "var(--accent)", lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column */}
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-end">
            <motion.div {...itemAnim(0.4, 20)}>
              <div className="position-relative d-inline-block float-lg-end" style={{ width: "100%", maxWidth: "380px" }}>
                <img
                  src={ayeshaImg}
                  alt="Ayesha Babar"
                  className="w-100"
                  style={{
                    aspectRatio: "4/5",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    border: "1px solid var(--border-accent)"
                  }}
                />
                
                {/* Top Badge */}
                <div className="glass-card position-absolute d-flex align-items-center gap-2" style={{ top: "20px", right: "20px", padding: "8px 12px", border: "1px solid var(--border-accent)", borderRadius: "20px", backgroundColor: "rgba(0,0,0,0.7)" }}>
                  <span className="rounded-circle" style={{ width: "8px", height: "8px", backgroundColor: "var(--accent)" }} />
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: "white" }}>Dean's Honor</span>
                </div>

                {/* Bottom Badge */}
                <div className="glass-card position-absolute" style={{ bottom: "20px", left: "20px", padding: "8px 12px", border: "1px solid var(--border)", borderRadius: "20px", backgroundColor: "rgba(0,0,0,0.7)" }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: "white" }}>🎓 CGPA 3.67 / 4.00</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
