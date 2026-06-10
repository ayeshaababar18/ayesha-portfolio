import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Globe2, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "1.5rem" }}>
      <div className="container">
        
        <div className="row g-4 mb-5">
          {/* Left - Branding */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: "var(--accent)", fontSize: "1.5rem" }}>
                AB
              </span>
              <span className="text-white" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.25rem" }}>
                Ayesha Babar
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Software Engineering Student @ CUST
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="col-md-4 d-flex flex-column align-items-md-center">
            <div>
              <h5 className="text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Quick Links</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-decoration-none"
                      style={{ color: "var(--text-muted)", fontSize: "0.95rem", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Socials & Top Button */}
          <div className="col-md-4 d-flex flex-column align-items-md-end">
            <h5 className="text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Connect</h5>
            <div className="d-flex align-items-center gap-3">
              <a 
                href="https://github.com/ayeshaababar18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ 
                  width: "40px", height: "40px", 
                  backgroundColor: "rgba(255,255,255,0.03)", 
                  border: "1px solid var(--border)", 
                  color: "var(--text-muted)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <Globe size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/ayeshababar18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ 
                  width: "40px", height: "40px", 
                  backgroundColor: "rgba(255,255,255,0.03)", 
                  border: "1px solid var(--border)", 
                  color: "var(--text-muted)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <Globe2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p 
            className="m-0 text-center w-100" 
            style={{ 
              fontFamily: "'Fira Code', monospace", 
              fontSize: "0.8rem", 
              color: "var(--text-muted)" 
            }}
          >
            © 2025 Ayesha Babar · Built with React & Bootstrap
          </p>

          <AnimatePresence>
            {showTopBtn && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="position-fixed d-flex align-items-center justify-content-center rounded-circle border-0"
                style={{
                  bottom: "24px",
                  right: "24px",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent)",
                  boxShadow: "var(--card-shadow)",
                  zIndex: 1040
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--accent)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--bg-card)"; e.currentTarget.style.color = "var(--accent)"; }}
              >
                <ArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </footer>
  );
}
