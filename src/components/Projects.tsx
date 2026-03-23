"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

type FilterType = "All" | "Android" | "Web";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  category: "Android" | "Web";
}

const projects: Project[] = [
  {
    title: "Tic Tac Toe — Android",
    description:
      "A fully functional Tic-Tac-Toe Android game built in Java. Features a clean Material Design UI, win detection, score tracking, and a reset mechanism. Demonstrates event handling, game logic, and Android lifecycle management.",
    tags: ["Java", "Android Studio", "XML"],
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Abhay1777",
    live: "#",
    category: "Android",
  },
  {
    title: "Stopwatch App — Android",
    description:
      "A precision stopwatch Android application with start, stop, lap, and reset functionality. Integrates video playback for interactive sessions. Built with clean UI patterns, demonstrating multithreading and MediaPlayer API usage.",
    tags: ["Java", "Android Studio", "MediaPlayer"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Abhay1777",
    live: "#",
    category: "Android",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built from scratch with Next.js 16, TypeScript, Framer Motion, and Tailwind CSS v4. Features glassmorphism design, smooth scroll animations, a multi-orbit hero, skill tabs, and an integrated contact form.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Abhay1777",
    live: "#",
    category: "Web",
  },
];

const filters: FilterType[] = ["All", "Android", "Web"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section bg-[var(--second-bg-color)] relative">
      {/* Bg decoration */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[radial-gradient(ellipse,rgba(129,140,248,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

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
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeFilter === f
                ? "bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)] text-white border-transparent shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--main-color)] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="card overflow-hidden hover:-translate-y-3 hover:shadow-[var(--card-hover-shadow)] hover:border-[rgba(56,189,248,0.25)] group"
            >
              {/* Project Image */}
              <div className="relative w-full h-[220px] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[var(--main-color)] opacity-40">
                    <Code2 size={48} />
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,11,25,0.95)] via-[rgba(6,11,25,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--main-color)] hover:border-transparent hover:shadow-[0_0_15px_var(--main-color)] translate-y-6 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live`}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--accent-color)] hover:border-transparent hover:shadow-[0_0_15px_var(--accent-color)] translate-y-6 group-hover:translate-y-0 transition-all duration-300 delay-75"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-[rgba(6,11,25,0.8)] border border-[rgba(255,255,255,0.1)] text-[var(--main-color)] backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-[var(--main-color)] bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--main-color)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Footer links */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-[var(--glass-border)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-white transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--main-color)] transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-14"
      >
        <a
          href="https://github.com/Abhay1777"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex items-center gap-3"
        >
          <Github size={20} />
          View All on GitHub
        </a>
      </motion.div>
    </section>
  );
}
