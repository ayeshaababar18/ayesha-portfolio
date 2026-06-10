import { motion } from "framer-motion";
import { useScrollProgress } from "./hooks/useScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
        zIndex: 9999,
        transition: "width 0.1s ease-out"
      }}
    />
  );
}

function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

export default App;