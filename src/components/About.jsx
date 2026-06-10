import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Award, Code2, Glasses, Cpu } from "lucide-react";

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="about" className="section-padding position-relative">
      <div className="container" style={{ maxWidth: "760px" }}>
        
        {/* Top: Eyebrow + Heading */}
        <motion.div {...fadeUp} className="text-center mb-5">
          <div className="eyebrow">ABOUT ME</div>
          <h2 style={{ fontSize: "2.8rem", lineHeight: 1.2 }}>
            <span className="text-white">Turning ideas into </span>
            <span style={{ color: "var(--accent)" }}>digital reality</span>
          </h2>
        </motion.div>

        {/* Middle: Paragraphs */}
        <motion.div {...fadeUp} className="text-start mb-5" style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          <p>
            Software Engineering student specializing in React.js and modern web development. Passionate about combining structured engineering with vibe coding to rapidly translate ideas into polished, responsive, and user-focused digital experiences.
          </p>
        </motion.div>

        {/* Bottom: Value Cards */}
        <motion.div {...fadeUp}>
          <div className="row g-3 mb-5">
            {[
              { icon: Code2, title: "React.js Focus", desc: "Specializing in modern web development." },
              { icon: Glasses, title: "VR Innovation", desc: "Building immersive 3D environments." },
              { icon: Cpu, title: "Clean Code", desc: "Combining engineering with vibe coding." },
            ].map((val, i) => (
              <div className="col-md-4" key={i}>
                <div className="h-100 p-3" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <div className="d-flex align-items-center justify-content-center mb-3 rounded-circle" style={{ width: "40px", height: "40px", backgroundColor: "rgba(16,185,129,0.1)", color: "var(--accent)" }}>
                    <val.icon size={20} />
                  </div>
                  <h4 className="mb-2 text-white" style={{ fontSize: "1rem" }}>{val.title}</h4>
                  <p className="m-0" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Below that: Quick Info Grid */}
        <motion.div {...fadeUp}>
          <div className="row g-3">
            {[
              { icon: Mail, label: "ayeshaababar18@gmail.com" },
              { icon: MapPin, label: "Rawalpindi, Pakistan" },
              { icon: GraduationCap, label: "CUST — 7th Semester" },
              { icon: Award, label: "Dean's Roll of Honor" },
            ].map((item, i) => (
              <div className="col-md-6" key={i}>
                <div className="d-flex align-items-center gap-3 p-3" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <item.icon size={20} style={{ color: "var(--text-muted)" }} />
                  <span style={{ color: "white", fontSize: "0.95rem" }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
