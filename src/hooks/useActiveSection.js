import { useState, useEffect } from "react";

const SECTIONS = ["hero", "about", "skills", "projects", "education", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
