import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layout, 
  Smartphone, 
  Award,
  Code,
  ExternalLink,
  Cpu,
  Globe,
  Monitor,
  CheckCircle,
  Medal,
  Mail
} from 'lucide-react';

// Custom Brand Icons
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

// Assets
import profileImg from './assets/ayesha-profile-real.jpg';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'achievements', 'education'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  const navItems = ['about', 'skills', 'experience', 'achievements', 'education'];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-sky-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Floating Pill Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-3xl">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card px-6 py-3 flex justify-between items-center rounded-full border border-white/10"
        >
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-300 text-sm border border-indigo-500/30">
              AB
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-xs font-semibold uppercase tracking-widest transition-all ${
                  activeSection === item ? 'text-indigo-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/in/ayeshababar18" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300"><LinkedinIcon /></a>
            <a href="https://github.com/ayeshababar18" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><GithubIcon /></a>
            <a href="mailto:ayeshaababar18@gmail.com" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300"><Mail className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </nav>

      <main className="relative z-10 pt-40 pb-20">
        
        {/* Hero Section */}
        <section id="home" className="max-w-5xl mx-auto px-6 mb-32">
          <FadeIn>
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card text-indigo-300 text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>
                  Welcome to my portfolio
                </div>
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                    Ayesha Babar
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-indigo-300">
                    Software Engineer & Web Developer
                  </p>
                </div>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                  Passionate about building sleek, high-performance applications with a strong focus on <span className="font-medium text-white">React JS</span>. I turn complex problems into simple, elegant digital experiences.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
                  <button onClick={() => scrollTo('experience')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold transition-all">
                    View Experience
                  </button>
                  <a href="/Ayesha_Babar_CV.pdf" download="Ayesha_Babar_CV.pdf" className="glass-card hover:bg-white/5 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10">
                    Download CV
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-2 glass-card relative z-10 border border-white/10">
                  <img 
                    src={profileImg} 
                    alt="Ayesha Babar" 
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="max-w-5xl mx-auto px-6 space-y-32">
          
          {/* About Section */}
          <section id="about">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-10">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6 text-lg text-slate-400 leading-relaxed font-light glass-card p-8 border border-white/5">
                  <p>
                    I am a Software Engineering student at <strong className="text-white font-medium">Capital University of Science and Technology</strong>. My journey in tech is driven by a deep curiosity for how things work and a desire to build tools that make a difference.
                  </p>
                  <p>
                    With a solid foundation in software principles and a primary interest in <strong className="text-indigo-300 font-medium">Web Development</strong>, I enjoy the balance of logic and design that React.js provides. I am always looking for ways to push the boundaries of what's possible on the web, combining structured engineering with creative problem-solving.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="glass-card p-6 flex items-start space-x-4 border border-white/5">
                    <div className="p-3 bg-indigo-500/10 text-indigo-300 rounded-xl">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white">3.67</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">CGPA</div>
                    </div>
                  </div>
                  <div className="glass-card p-6 flex items-start space-x-4 border border-white/5">
                    <div className="p-3 bg-sky-500/10 text-sky-300 rounded-xl">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white">10+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Projects Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-10">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    category: "Frontend Development", 
                    icon: <Layout className="w-6 h-6" />,
                    items: ["React.js", "JavaScript (ES6+)", "AngularJS", "HTML5 & CSS3", "Bootstrap 5", "Tailwind CSS"],
                    color: "text-indigo-300",
                    bg: "bg-indigo-500/10"
                  },
                  { 
                    category: "Backend & Database", 
                    icon: <Cpu className="w-6 h-6" />,
                    items: ["ASP.NET MVC", "C#", "Java", "Python", "MS SQL Server", "Firebase"],
                    color: "text-sky-300",
                    bg: "bg-sky-500/10"
                  },
                  { 
                    category: "Tools & Methods", 
                    icon: <Terminal className="w-6 h-6" />,
                    items: ["Git / GitHub", "Unity 3D", "Android Studio", "Figma", "Agile / Jira", "UI/UX Design"],
                    color: "text-slate-300",
                    bg: "bg-slate-500/10"
                  }
                ].map((group, i) => (
                  <div key={i} className="glass-card p-8 border border-white/5">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`${group.color} ${group.bg} p-3 rounded-xl`}>
                        {group.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{group.category}</h3>
                    </div>
                    <ul className="space-y-4">
                      {group.items.map((skill, j) => (
                        <li key={j} className="flex items-center text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full mr-3 bg-slate-600`}></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <FadeIn>
              <div className="flex justify-between items-end mb-10">
                <h2 className="text-4xl font-bold text-white">Experience & Projects</h2>
                <a href="https://github.com/ayeshababar18" target="_blank" rel="noreferrer" className="hidden sm:flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  View GitHub <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="space-y-8">
                {/* Highlighted Volunteer Experience */}
                <div className="glass-card p-8 border-l-4 border-l-indigo-500 border-t border-r border-b border-white/5">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Volunteer Assistant</h3>
                      <p className="text-indigo-300 font-medium tracking-wide">Al-Ghazali School for Special Children</p>
                    </div>
                    <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-full uppercase tracking-widest border border-indigo-500/20">
                      Community Service
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed max-w-3xl font-light text-lg">
                    Dedicated time to support children with special needs, assisting in educational activities and specialized care. This role required high adaptability and taught me the profound value of inclusive design, empathy, and effective communication in cross-functional environments.
                  </p>
                </div>

                {/* Academic/Technical Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "University Sports Portal",
                      role: "Lead Full-Stack Developer",
                      desc: "Engineered a secure, role-based responsive web application to manage and schedule university sports events. Designed the full database schema ensuring data integrity.",
                      tech: ["ASP.NET MVC", "C#", "Bootstrap 5", "SQL Server"],
                      icon: <Monitor className="w-6 h-6 text-indigo-300" />
                    },
                    {
                      title: "Immersive VR Environment",
                      role: "Unity Developer",
                      desc: "Developing a mobile-based multiplayer 3D virtual environment with real-time voice communication, designed for affordable Google Cardboard VR headsets.",
                      tech: ["Unity 3D", "Kotlin", "Firebase", "Agora SDK"],
                      icon: <Globe className="w-6 h-6 text-sky-300" />
                    },
                    {
                      title: "EcoHabit Builder",
                      role: "Android Developer",
                      desc: "Built a native Android application with gamified task tracking and daily habit management to promote eco-friendly routines with persistent local storage.",
                      tech: ["Java", "Android Studio", "SQLite"],
                      icon: <Smartphone className="w-6 h-6 text-indigo-300" />
                    },
                    {
                      title: "Give and Grow Platform",
                      role: "Web Development Lead",
                      desc: "Led end-to-end development of a community engagement web platform — from stakeholder requirements through to full deployment.",
                      tech: ["Web Dev", "SDLC", "Req. Engineering"],
                      icon: <Terminal className="w-6 h-6 text-sky-300" />
                    }
                  ].map((exp, i) => (
                    <div key={i} className="glass-card p-8 flex flex-col border border-white/5">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-4 bg-white/5 rounded-2xl">
                          {exp.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{exp.role}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light">{exp.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((tag, j) => (
                          <span key={j} className="px-3 py-1.5 bg-white/5 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Achievements Section */}
          <section id="achievements">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-10">Achievements & Honors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 border-l-4 border-l-sky-500 border-t border-r border-b border-white/5 flex items-start space-x-6">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl">
                    <Medal className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dean's Roll of Honor</h3>
                    <p className="text-slate-400 font-light">Awarded <strong className="text-sky-300 font-semibold">6 times</strong> for exceptional academic performance and maintaining a high CGPA throughout my degree program.</p>
                  </div>
                </div>

                <div className="glass-card p-8 border-l-4 border-l-indigo-500 border-t border-r border-b border-white/5 flex items-start space-x-6">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Graphic Designer Certificate</h3>
                    <p className="text-slate-400 font-light">Certified Graphic Designer, demonstrating strong visual communication skills, creative problem solving, and proficiency in modern design tools.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Education Section */}
          <section id="education">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-10">Education</h2>
              <div className="space-y-6">
                <div className="glass-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-l-indigo-500 border-t border-r border-b border-white/5">
                  <div>
                    <h3 className="text-2xl font-bold text-white">BS Software Engineering</h3>
                    <p className="text-slate-400 mt-2 text-lg">Capital University of Science & Technology (CUST)</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 mb-2">Feb 2023 – Present</span>
                    <p className="text-sm text-slate-500 font-bold">7th Semester • CGPA: 3.67</p>
                  </div>
                </div>

                <div className="glass-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-l-sky-500 border-t border-r border-b border-white/5">
                  <div>
                    <h3 className="text-2xl font-bold text-white">ICS – Computer Science</h3>
                    <p className="text-slate-400 mt-2 text-lg">Askaria College for Women</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-300 text-xs font-bold uppercase tracking-widest rounded-full border border-sky-500/20">Completed</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20 glass-card rounded-none border-b-0 border-l-0 border-r-0">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ayesha Babar</h3>
            <p className="text-slate-500 text-sm">Software Engineer specializing in modern web development.</p>
          </div>
          
          <div className="flex items-center space-x-5">
            <a href="https://linkedin.com/in/ayeshababar18" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-400 hover:text-indigo-300 border border-white/5 transition-all">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://github.com/ayeshababar18" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-400 hover:text-white border border-white/5 transition-all">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="mailto:ayeshaababar18@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-400 hover:text-indigo-300 border border-white/5 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center text-xs font-bold tracking-widest uppercase text-slate-600">
          © {new Date().getFullYear()} Ayesha Babar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}