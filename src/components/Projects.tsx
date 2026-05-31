"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Terminal } from "lucide-react";
import Image from "next/image";

type FilterType = "All" | "Android" | "Web";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  github: string;
  live: string | null;
  category: "Android" | "Web";
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: "Portfolio Website v2",
    subtitle: "Web Application",
    description:
      "A premium interactive developer portfolio featuring advanced CSS animations, custom magnetic pointer interaction, scroll-bound progress, and responsive bento grid layouts. Performance-tuned and engineered for visual delight.",
    features: [
      "Framer Motion layout animations & transitions",
      "Custom magnetic cursor tracking with spring physics",
      "Tailwind CSS v4 design system implementation",
      "Automated loading state preloader with timeline cues"
    ],
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS v4"],
    image: "/project-portfolio.png",
    github: "https://github.com/Abhay1777/Portfolio",
    live: "https://abhay1777.github.io/Portfolio/",
    category: "Web",
    isFeatured: true,
  },
  {
    title: "Tic Tac Toe Mobile",
    subtitle: "Android Application",
    description:
      "A classic Tic Tac Toe Android app built natively with Java. Implements smart win-detection algorithms, persistent score tracking, and responsive Material Design grid layouts.",
    features: [
      "Native Java & Android SDK development",
      "Zero-latency score caching via SharedPreferences",
      "Material Design 3 system styling"
    ],
    tags: ["Java", "Android Studio", "XML Layouts"],
    image: "/project-tictactoe.png",
    github: "https://github.com/Abhay1777",
    live: null,
    category: "Android",
  },
  {
    title: "Precision Stopwatch",
    subtitle: "Android Application",
    description:
      "A high-precision native stopwatch application featuring multi-lap tracking, MediaPlayer video integration, and clean asynchronous threading to ensure tick reliability.",
    features: [
      "Multithreaded time calculations",
      "Lap memory tracking lists",
      "MediaPlayer API for instructional video popups"
    ],
    tags: ["Java", "Android SDK", "MediaPlayer API"],
    image: "/project-stopwatch.png",
    github: "https://github.com/Abhay1777",
    live: null,
    category: "Android",
  },
];

const filters: FilterType[] = ["All", "Android", "Web"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section bg-[var(--second-bg-color)] relative">
      {/* Bg decoration */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[radial-gradient(ellipse,rgba(129,140,248,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <span className="section-label">03 — Work</span>
        </div>
        <h2 className="heading font-display">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="heading-sub">
          A selection of my recent works across mobile applications and modern web development.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center gap-3 mb-14"
      >
        {filters.map((f) => (
          <button
            key={f}
            id={`project-filter-${f.toLowerCase()}`}
            onClick={() => setActiveFilter(f)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
              activeFilter === f
                ? "border-transparent text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--main-color)] hover:text-white"
            }`}
            style={{
              background: activeFilter === f ? "linear-gradient(135deg, var(--main-color), var(--accent-color))" : "rgba(255, 255, 255, 0.02)"
            }}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isLarge = project.isFeatured && activeFilter === "All";

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5 }}
                  className={`card overflow-hidden flex flex-col justify-between group hover:border-[rgba(56,189,248,0.25)] hover:shadow-[var(--card-hover-shadow)] ${
                    isLarge ? "lg:col-span-2" : "col-span-1"
                  }`}
                >
                  <div className={`flex flex-col w-full ${isLarge ? "lg:flex-row h-full" : ""}`}>

                    {/* Project Image Panel */}
                    <div className={`relative overflow-hidden w-full shrink-0 bg-slate-950 ${
                      isLarge ? "lg:w-[48%] h-[300px] lg:h-full" : "h-[210px]"
                    }`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        priority={project.isFeatured}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent opacity-60" />

                      {/* Hover action overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,10,20,0.92)] via-[rgba(5,10,20,0.65)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub Source`}
                          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--main-color)] hover:border-transparent hover:shadow-[0_0_15px_var(--main-color)] translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <Github size={20} />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live Demo`}
                            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--accent-color)] hover:border-transparent hover:shadow-[0_0_15px_var(--accent-color)] translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>

                      {/* Category badge + Featured tag */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#050a14]/90 border border-white/10 text-[var(--main-color)] backdrop-blur-md flex items-center gap-1.5 shadow-md">
                          {project.category === "Web" ? <Globe size={11} /> : <Smartphone size={11} />}
                          {project.category}
                        </span>
                        {project.isFeatured && (
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--accent-color)]/20 border border-[var(--accent-color)]/30 text-[var(--accent-color)] backdrop-blur-md shadow-md">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Details Panel */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono-custom font-semibold text-[var(--main-color)] bg-[rgba(56,189,248,0.06)] border border-[rgba(56,189,248,0.12)] px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-xs font-semibold text-[var(--text-subtle)] font-mono-custom uppercase tracking-wider mb-1">
                          {project.subtitle}
                        </p>
                        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[var(--main-color)] transition-colors font-display">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Feature bullets */}
                        <ul className="space-y-1.5 mb-5">
                          {project.features.map((feat) => (
                            <li key={feat} className="text-[11px] text-white/60 flex items-start gap-2">
                              <span className="text-[var(--main-color)] mt-0.5 font-bold shrink-0">›</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer CTA */}
                      <div className="flex items-center gap-4 pt-4 border-t border-[var(--glass-border)]">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-white transition-colors"
                        >
                          <Github size={13} /> Source
                        </a>
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--main-color)] transition-colors ml-auto"
                          >
                            <ExternalLink size={13} /> Live Demo
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 text-[10px] text-[var(--text-subtle)] font-mono-custom uppercase tracking-wider ml-auto px-2 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                            <Smartphone size={10} /> APK Only
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* GitHub Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-6xl mx-auto px-4 mt-16"
      >
        <div className="p-8 glass-panel rounded-3xl border border-[var(--glass-border)] relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--main-color)] opacity-[0.02] blur-[80px] pointer-events-none rounded-full" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(56,189,248,0.06)] border border-[rgba(56,189,248,0.12)] flex items-center justify-center text-[var(--main-color)] shrink-0">
              <Terminal size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">Looking for more?</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Browse my full repositories, coding challenges, and sandbox projects on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Abhay1777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-6 py-3 rounded-xl flex items-center gap-2 tracking-wider uppercase font-bold shrink-0"
          >
            <Github size={15} /> Explore Repositories
          </a>
        </div>
      </motion.div>
    </section>
  );
}
