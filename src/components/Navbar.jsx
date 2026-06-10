import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0"
      }}
      data-bs-theme="dark"
    >
      <div className="container">
        <a
          className="navbar-brand m-0 p-0 text-decoration-none"
          href="#hero"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            color: "var(--accent)",
            fontSize: "1.5rem"
          }}
        >
          AB
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-2 gap-lg-4 mt-3 mt-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className={`nav-link position-relative ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: activeSection === link.href.substring(1) ? "var(--accent)" : "var(--text-secondary)",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                     if(activeSection !== link.href.substring(1)) e.target.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                     if(activeSection !== link.href.substring(1)) e.target.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn text-decoration-none d-inline-block"
                style={{
                  border: "1.5px solid var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  padding: "0.4rem 1.5rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--accent)";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "var(--accent)";
                }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
