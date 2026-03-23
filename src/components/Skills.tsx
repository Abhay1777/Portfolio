"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
  SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiPython, SiMongodb, SiFirebase, SiPostgresql,
  SiGit, SiGithub, SiAndroidstudio, SiVite,
  SiVercel, SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Category = "Frontend" | "Backend" | "Mobile" | "Tools";

const categories: Category[] = ["Frontend", "Backend", "Mobile", "Tools"];

const skills: Record<Category, { Icon: React.ElementType; name: string; color: string; level: string }[]> = {
  Frontend: [
    { Icon: SiReact,       name: "React",      color: "#61dafb", level: "Intermediate" },
    { Icon: SiNextdotjs,   name: "Next.js",    color: "#ffffff", level: "Intermediate" },
    { Icon: SiJavascript,  name: "JavaScript", color: "#f7df1e", level: "Intermediate" },
    { Icon: SiTypescript,  name: "TypeScript", color: "#3178c6", level: "Learning"     },
    { Icon: SiTailwindcss, name: "Tailwind",   color: "#38bdf8", level: "Intermediate" },
    { Icon: SiHtml5,       name: "HTML5",      color: "#e34f26", level: "Proficient"   },
    { Icon: SiCss,        name: "CSS3",       color: "#264de4", level: "Proficient"   },
    { Icon: SiVite,        name: "Vite",       color: "#646cff", level: "Familiar"     },
  ],
  Backend: [
    { Icon: SiNodedotjs,   name: "Node.js",    color: "#68a063", level: "Learning"     },
    { Icon: SiPython,      name: "Python",     color: "#fbbf24", level: "Intermediate" },
    { Icon: FaJava,        name: "Java",       color: "#f89820", level: "Proficient"   },
    { Icon: SiMongodb,     name: "MongoDB",    color: "#47a248", level: "Familiar"     },
    { Icon: SiFirebase,    name: "Firebase",   color: "#ffca28", level: "Familiar"     },
    { Icon: SiPostgresql,  name: "PostgreSQL",  color: "#336791", level: "Familiar"    },
  ],
  Mobile: [
    { Icon: FaJava,           name: "Java Android",    color: "#f89820", level: "Intermediate" },
    { Icon: SiAndroidstudio,  name: "Android Studio", color: "#3ddc84", level: "Intermediate" },
    { Icon: SiFirebase,       name: "Firebase",        color: "#ffca28", level: "Familiar"     },
  ],
  Tools: [
    { Icon: SiGit,    name: "Git",    color: "#f05032", level: "Proficient" },
    { Icon: SiGithub, name: "GitHub", color: "#ffffff", level: "Proficient" },
    { Icon: SiVercel, name: "Vercel", color: "#ffffff", level: "Familiar"   },
    { Icon: SiFigma,  name: "Figma",  color: "#f24e1e", level: "Familiar"   },
  ],
};

const levelColor: Record<string, string> = {
  Proficient:   "text-[#4ade80] bg-[rgba(74,222,128,0.1)] border-[rgba(74,222,128,0.2)]",
  Intermediate: "text-[#38bdf8] bg-[rgba(56,189,248,0.1)] border-[rgba(56,189,248,0.2)]",
  Learning:     "text-[#fbbf24] bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.2)]",
  Familiar:     "text-[#818cf8] bg-[rgba(129,140,248,0.1)] border-[rgba(129,140,248,0.2)]",
};

export default function Skills() {
  const [active, setActive] = useState<Category>("Frontend");

  return (
    <section id="skills" className="section relative">
      {/* Bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-[radial-gradient(ellipse,rgba(56,189,248,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        My <span className="gradient-text">Skills</span>
      </motion.h2>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-14"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            id={`skills-tab-${cat.toLowerCase()}`}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
              active === cat
                ? "bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)] text-white border-transparent shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--main-color)] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1      }}
          exit={  { opacity: 0, y: -20, scale: 0.97   }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
        >
          {skills[active].map(({ Icon, name, color, level }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1,  y: 0  }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="card p-6 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[var(--card-hover-shadow)] hover:border-[rgba(255,255,255,0.15)] group cursor-default"
            >
              <Icon
                className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{ color }}
              />
              <span className="text-sm font-semibold text-white text-center">{name}</span>
              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${levelColor[level]}`}>
                {level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-5 mt-12"
      >
        {Object.entries(levelColor).map(([level, cls]) => (
          <div key={level} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <span className={`w-2 h-2 rounded-full inline-block ${cls.split(" ")[0].replace("text-", "bg-")}`} />
            {level}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
