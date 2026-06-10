import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const skillsData = [
  {
    title: "Web Technologies",
    dotColor: "var(--accent)",
    skills: ["React.js", "JavaScript", "ASP.NET MVC", "AngularJS", "Bootstrap 5"]
  },
  {
    title: "Programming Languages",
    dotColor: "var(--accent-light)",
    skills: ["Java", "C#", "C++", "Python", "PHP", "SQL"]
  },
  {
    title: "Tools & Methods",
    dotColor: "#14B8A6",
    skills: ["Git/GitHub", "Firebase", "Figma", "Agile/Jira", "UI/UX Design", "Req. Engineering", "Generative AI"]
  }
];

export default function Skills() {
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
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="skills" className="section-padding position-relative">
      <div className="container">
        
        <motion.div 
          initial={prefersReducedMotion ? "visible" : "hidden"} 
          whileInView="visible" 
          viewport={{ once: true, margin: "-60px" }} 
          variants={sectionVariants}
          className="mb-5"
        >
          <div className="eyebrow">WHAT I WORK WITH</div>
          <h2 className="text-white" style={{ fontSize: "2.5rem" }}>Technical Skills</h2>
        </motion.div>

        <div className="row g-4">
          {skillsData.map((category, i) => (
            <div className="col-md-4" key={i}>
              <motion.div
                initial={prefersReducedMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={sectionVariants}
                className="h-100"
              >
                <TiltCard className="h-100 p-4 glow-border" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px" }}>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <span className="rounded-circle" style={{ width: "10px", height: "10px", backgroundColor: category.dotColor, boxShadow: `0 0 10px ${category.dotColor}` }} />
                    <h3 className="text-white m-0" style={{ fontSize: "1.2rem" }}>{category.title}</h3>
                  </div>

                  <motion.div 
                    variants={containerVariants} 
                    initial={prefersReducedMotion ? "visible" : "hidden"} 
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="d-flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill, j) => (
                      <motion.div key={j} variants={badgeVariants}>
                        <div 
                          className="skill-badge" 
                          style={{
                            backgroundColor: "rgba(16,185,129,0.08)",
                            border: "1px solid var(--border-accent)",
                            color: "var(--text-secondary)",
                            borderRadius: "20px",
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.78rem",
                            padding: "4px 12px",
                            display: "inline-block"
                          }}
                        >
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TiltCard>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
