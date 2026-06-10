import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function Education() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sectionVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="section-padding position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            <motion.div 
              initial={prefersReducedMotion ? "visible" : "hidden"} 
              whileInView="visible" 
              viewport={{ once: true, margin: "-60px" }} 
              variants={sectionVariants}
              className="mb-5 text-center text-md-start"
            >
              <div className="eyebrow">BACKGROUND</div>
              <h2 className="text-white" style={{ fontSize: "2.5rem" }}>Education & Honors</h2>
            </motion.div>

            {/* Timeline */}
            <div className="position-relative ps-4 ps-md-5 mb-5">
              {/* Vertical Line */}
              <div 
                className="position-absolute top-0 bottom-0" 
                style={{ 
                  left: "14px", 
                  width: "2px", 
                  backgroundColor: "var(--accent)", 
                  opacity: 0.5,
                  borderRadius: "2px"
                }} 
              />

              {/* Entry 1 */}
              <motion.div 
                initial={prefersReducedMotion ? "visible" : "hidden"} 
                whileInView="visible" 
                viewport={{ once: true, margin: "-60px" }} 
                variants={itemVariants}
                className="position-relative mb-5"
              >
                <TiltCard>
                  {/* Node */}
                <div 
                  className="position-absolute rounded-circle" 
                  style={{ 
                    left: "-33px", 
                    top: "6px", 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "var(--accent)", 
                    border: "3px solid var(--bg-primary)",
                    boxShadow: "0 0 0 2px var(--border-accent)"
                  }} 
                />

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-2">
                  <h3 className="text-white m-0" style={{ fontSize: "1.3rem" }}>BS Software Engineering</h3>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Feb 2023 – Present | 7th Semester
                  </span>
                </div>
                
                <p style={{ color: "var(--accent-light)", fontSize: "1rem", fontWeight: 500, marginBottom: "0.75rem" }}>
                  Capital University of Science & Technology (CUST)
                </p>

                <div className="mb-3">
                  <span 
                    className="skill-badge d-inline-block"
                    style={{
                      backgroundColor: "rgba(16,185,129,0.08)",
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent)",
                      borderRadius: "20px",
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.8rem",
                      padding: "4px 12px"
                    }}
                  >
                    CGPA: 3.67 / 4.00
                  </span>
                </div>

                <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0, paddingLeft: "1.2rem" }}>
                  <li className="mb-2">Specializing in React.js, web development, and software design</li>
                  <li>Recipient of Dean's Roll of Honor for 6 consecutive semesters</li>
                </ul>
                </TiltCard>
              </motion.div>

              {/* Entry 2 */}
              <motion.div 
                initial={prefersReducedMotion ? "visible" : "hidden"} 
                whileInView="visible" 
                viewport={{ once: true, margin: "-60px" }} 
                variants={itemVariants}
                className="position-relative"
              >
                <TiltCard>
                  {/* Node */}
                <div 
                  className="position-absolute rounded-circle" 
                  style={{ 
                    left: "-33px", 
                    top: "6px", 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "var(--bg-card)", 
                    border: "3px solid var(--bg-primary)",
                    boxShadow: "0 0 0 2px var(--border)"
                  }} 
                />

                <h3 className="text-white m-0 mb-1" style={{ fontSize: "1.3rem" }}>ICS — Computer Science</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0 }}>
                  Askaria College for Women
                </p>
                </TiltCard>
              </motion.div>

            </div>

            {/* Honors Card */}
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
            >
              <TiltCard 
                className="glow-border d-flex align-items-start gap-3"
                style={{ 
                  backgroundColor: "rgba(16,185,129,0.05)", 
                  border: "1px solid var(--border-accent)", 
                  borderRadius: "12px", 
                  padding: "1.5rem" 
                }}
              >
                <div style={{ fontSize: "1.5rem" }}>🏆</div>
                <div>
                  <h4 className="text-white mb-2" style={{ fontSize: "1.15rem" }}>Dean's Roll of Honor</h4>
                  <p className="m-0" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                    Awarded for academic excellence across 6 consecutive semesters at CUST — consistently maintaining a CGPA of 3.67/4.00
                  </p>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
