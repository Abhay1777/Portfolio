"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ElementType } from "react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
  SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiPython, SiMongodb, SiFirebase, SiPostgresql,
  SiGit, SiGithub, SiAndroidstudio, SiVite,
  SiVercel, SiFigma, SiAndroid,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Category = "All" | "Frontend" | "Backend" | "Mobile" | "Tools";

const categories: Category[] = ["All", "Frontend", "Backend", "Mobile", "Tools"];

interface SkillItem {
  Icon: ElementType;
  name: string;
  color: string;
  category: ("Frontend" | "Backend" | "Mobile" | "Tools")[];
  desc: string;
}

const allSkills: SkillItem[] = [
  { Icon: SiReact,         name: "React",          color: "#61dafb", category: ["Frontend"],            desc: "Interactive web applications & hooks architecture" },
  { Icon: SiNextdotjs,     name: "Next.js",         color: "#ffffff", category: ["Frontend"],            desc: "Server-side rendering, routing & API routes" },
  { Icon: SiJavascript,    name: "JavaScript",      color: "#f7df1e", category: ["Frontend"],            desc: "Modern ES6+, async operations & DOM logic" },
  { Icon: SiTypescript,    name: "TypeScript",      color: "#3178c6", category: ["Frontend"],            desc: "Type safety, interfaces & robust development" },
  { Icon: SiTailwindcss,   name: "Tailwind",        color: "#38bdf8", category: ["Frontend"],            desc: "Rapid utility-first styling & responsiveness" },
  { Icon: SiHtml5,         name: "HTML5",           color: "#e34f26", category: ["Frontend"],            desc: "Semantic structure & web accessibility standards" },
  { Icon: SiCss,           name: "CSS3",            color: "#264de4", category: ["Frontend"],            desc: "Custom layouts, animations & responsive grids" },
  { Icon: SiVite,          name: "Vite",            color: "#646cff", category: ["Frontend", "Tools"],   desc: "Ultra-fast frontend build tooling" },
  { Icon: SiNodedotjs,     name: "Node.js",         color: "#68a063", category: ["Backend"],             desc: "Server-side runtimes & RESTful API architectures" },
  { Icon: SiPython,        name: "Python",          color: "#fbbf24", category: ["Backend"],             desc: "Scripts, data handling & OOP implementations" },
  { Icon: FaJava,          name: "Java",            color: "#f89820", category: ["Backend", "Mobile"],   desc: "Object-oriented structures & Android core logic" },
  { Icon: SiAndroid,       name: "Android SDK",     color: "#3ddc84", category: ["Mobile"],              desc: "Native Android application development" },
  { Icon: SiAndroidstudio, name: "Android Studio",  color: "#3ddc84", category: ["Tools"],              desc: "SDK configurations, debugging & builds" },
  { Icon: SiMongodb,       name: "MongoDB",         color: "#47a248", category: ["Backend"],             desc: "NoSQL document storage & schema design" },
  { Icon: SiFirebase,      name: "Firebase",        color: "#ffca28", category: ["Backend", "Mobile"],   desc: "Realtime databases, Auth & hosting suites" },
  { Icon: SiPostgresql,    name: "PostgreSQL",      color: "#336791", category: ["Backend"],             desc: "Relational database structures & SQL queries" },
  { Icon: SiGit,           name: "Git",             color: "#f05032", category: ["Tools"],              desc: "Version control, branching & merge resolutions" },
  { Icon: SiGithub,        name: "GitHub",          color: "#ffffff", category: ["Tools"],              desc: "CI/CD setups, remote sync & repo management" },
  { Icon: SiVercel,        name: "Vercel",          color: "#ffffff", category: ["Tools"],              desc: "Cloud hosting & seamless pipeline deployment" },
  { Icon: SiFigma,         name: "Figma",           color: "#f24e1e", category: ["Tools"],              desc: "Prototyping, UI layouts & design system handoffs" },
];

// Compute category counts
const categoryCounts: Record<Category, number> = {
  All: allSkills.length,
  Frontend: allSkills.filter(s => s.category.includes("Frontend")).length,
  Backend: allSkills.filter(s => s.category.includes("Backend")).length,
  Mobile: allSkills.filter(s => s.category.includes("Mobile")).length,
  Tools: allSkills.filter(s => s.category.includes("Tools")).length,
};

export default function Skills() {
  const [active, setActive] = useState<Category>("All");

  const filteredSkills = active === "All"
    ? allSkills
    : allSkills.filter(skill => skill.category.includes(active as "Frontend" | "Backend" | "Mobile" | "Tools"));

  return (
    <section id="skills" className="section relative bg-[var(--bg-color)]">
      {/* Bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-[radial-gradient(ellipse,rgba(58,191,248,0.03)_0%,transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <span className="section-label">02 — Arsenal</span>
        </div>
        <h2 className="heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="heading-sub">
          A collection of languages, frameworks, databases, and tools that I use to bring ideas to life.
        </p>
      </motion.div>

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
            className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
              active === cat
                ? "border-transparent text-white shadow-[0_0_20px_rgba(58,191,248,0.2)]"
                : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--main-color)] hover:text-white"
            }`}
            style={{
              background: active === cat ? "linear-gradient(135deg, var(--main-color), var(--accent-color))" : "rgba(255, 255, 255, 0.02)"
            }}
          >
            {cat}
            <span className={`text-[10px] font-mono-custom px-1.5 py-0.5 rounded-full ${
              active === cat
                ? "bg-white/20 text-white"
                : "bg-white/5 text-[var(--text-subtle)]"
            }`}>
              {categoryCounts[cat]}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map(({ Icon, name, color, desc }) => (
            <motion.div
              layout
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-5 glass-panel rounded-2xl border border-[var(--glass-border)] overflow-hidden group cursor-default flex flex-col justify-between min-h-[150px]"
            >
              {/* Brand glow on hover */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none blur-xl"
                style={{ background: color }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.06] group-hover:border-white/15 transition-colors"
                  >
                    <Icon
                      className="text-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color }}
                    />
                  </div>
                  {/* Color dot indicates category */}
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                    style={{ background: color }}
                  />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 font-display tracking-wide">
                  {name}
                </h3>
              </div>

              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {desc}
              </p>

              {/* Bottom accent strip on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
