import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Globe2, Globe, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ayeshaababar18@gmail.com", href: "mailto:ayeshaababar18@gmail.com" },
  { icon: Globe2, label: "LinkedIn", value: "linkedin.com/in/ayeshababar18", href: "https://linkedin.com/in/ayeshababar18" },
  { icon: Globe, label: "GitHub", value: "github.com/ayeshaababar18", href: "https://github.com/ayeshaababar18" },
  { icon: MapPin, label: "Location", value: "Rawalpindi, Pakistan 🇵🇰", href: null },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      e.target.reset();
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

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
    <section id="contact" className="section-padding position-relative">
      <div className="container">
        
        <motion.div 
          initial={prefersReducedMotion ? "visible" : "hidden"} 
          whileInView="visible" 
          viewport={{ once: true, margin: "-60px" }} 
          variants={sectionVariants}
          className="mb-5 text-center text-lg-start"
        >
          <div className="eyebrow">GET IN TOUCH</div>
          <h2 className="text-white mb-3" style={{ fontSize: "2.8rem" }}>Let's Connect</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            Open to internships, collaborations, and freelance projects.
          </p>
        </motion.div>

        <div className="row g-5">
          
          {/* Left - Info Cards */}
          <div className="col-lg-5">
            <motion.div 
              className="d-flex flex-column"
              variants={containerVariants}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {contactInfo.map((info, i) => (
                <motion.div key={i} variants={itemVariants}>
                  {info.href ? (
                    <TiltCard>
                    <a 
                      href={info.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="glow-border text-decoration-none d-flex align-items-center gap-3 mb-3 p-3"
                      style={{ 
                        backgroundColor: "var(--bg-card)", 
                        border: "1px solid var(--border)", 
                        borderRadius: "12px",
                      }}
                    >
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" 
                        style={{ width: "48px", height: "48px", backgroundColor: "rgba(16,185,129,0.1)", color: "var(--accent)" }}
                      >
                        <info.icon size={20} />
                      </div>
                      <div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2px" }}>{info.label}</div>
                        <div className="text-white" style={{ fontSize: "0.95rem", fontWeight: 500 }}>{info.value}</div>
                      </div>
                    </a>
                    </TiltCard>
                  ) : (
                    <TiltCard>
                    <div 
                      className="glow-border d-flex align-items-center gap-3 mb-3 p-3"
                      style={{ 
                        backgroundColor: "var(--bg-card)", 
                        border: "1px solid var(--border)", 
                        borderRadius: "12px",
                      }}
                    >
                      <div 
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" 
                        style={{ width: "48px", height: "48px", backgroundColor: "rgba(16,185,129,0.1)", color: "var(--accent)" }}
                      >
                        <info.icon size={20} />
                      </div>
                      <div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2px" }}>{info.label}</div>
                        <div className="text-white" style={{ fontSize: "0.95rem", fontWeight: 500 }}>{info.value}</div>
                      </div>
                    </div>
                    </TiltCard>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
            >
              <div 
                className="p-4 p-md-5"
                style={{ 
                  backgroundColor: "var(--bg-card)", 
                  border: "1px solid var(--border)", 
                  borderRadius: "16px" 
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        required 
                        placeholder="Full Name" 
                        style={{
                          width: "100%",
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border)",
                          borderRadius: "10px",
                          color: "white",
                          padding: "12px 16px",
                          outline: "none"
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        required 
                        placeholder="Email Address" 
                        style={{
                          width: "100%",
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border)",
                          borderRadius: "10px",
                          color: "white",
                          padding: "12px 16px",
                          outline: "none"
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <input 
                      type="text" 
                      required 
                      placeholder="Subject" 
                      style={{
                        width: "100%",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        color: "white",
                        padding: "12px 16px",
                        outline: "none"
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <div className="mb-4">
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Message" 
                      style={{
                        width: "100%",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        color: "white",
                        padding: "12px 16px",
                        outline: "none",
                        resize: "none"
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn w-100"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "#000",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      borderRadius: "10px",
                      padding: "12px",
                      border: "none",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => { if(!isSubmitting) { e.target.style.backgroundColor = "var(--accent-dark)"; e.target.style.transform = "translateY(-1px)"; } }}
                    onMouseLeave={(e) => { if(!isSubmitting) { e.target.style.backgroundColor = "var(--accent)"; e.target.style.transform = "translateY(0px)"; } }}
                  >
                    {isSubmitting ? (
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="position-fixed"
            style={{ 
              bottom: "24px", 
              right: "24px", 
              zIndex: 1050,
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-accent)",
              borderRadius: "12px",
              padding: "16px 20px",
              color: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            <span style={{ color: "var(--accent)", marginRight: "8px" }}>✓</span>
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
