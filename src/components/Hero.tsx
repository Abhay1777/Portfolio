"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const orbitIcons = [
  { Icon: SiReact,       color: "#61dafb", duration: 20, size: "inner",  pos: { top: "50%", left: "-1.5rem" } },
  { Icon: SiNodedotjs,   color: "#818cf8", duration: 30, size: "middle", pos: { top: "50%", right: "-1.5rem" } },
  { Icon: SiPython,      color: "#fbbf24", duration: 18, size: "outer",  pos: { top: "-1.5rem", left: "50%" } },
  { Icon: SiTypescript,  color: "#38bdf8", duration: 25, size: "outer",  pos: { bottom: "-1.5rem", left: "50%" } },
];

export default function Hero() {
  const words = [
    "Full Stack Developer.",
    "Android Developer.",
    "IT Engineering Student.",
    "Problem Solver.",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );
      setTypingSpeed(isDeleting ? 40 : 90);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-[5%] md:px-[9%] pt-32 pb-16 relative overflow-hidden"
    >
      {/* ── Background Effects ── */}
      {/* Large glow blob — top right */}
      <div className="absolute top-[10%] right-[5%] w-[55vw] h-[55vw] bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,rgba(6,11,25,0)_70%)] rounded-full -z-10 blur-[80px] animate-pulse-ring pointer-events-none" />
      {/* Secondary purple blob — bottom left */}
      <div className="absolute bottom-[10%] left-[5%] w-[45vw] h-[45vw] bg-[radial-gradient(circle,rgba(129,140,248,0.07)_0%,rgba(6,11,25,0)_70%)] rounded-full -z-10 blur-[80px] pointer-events-none animate-float" />

      {/* Floating decorative particles */}
      <div className="absolute top-[25%] left-[12%] w-3 h-3 rounded-full bg-[var(--main-color)] opacity-30 animate-float pointer-events-none" />
      <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-[var(--accent-color)] opacity-30 animate-float-delayed pointer-events-none" />
      <div className="absolute top-[45%] left-[30%] w-1.5 h-1.5 rounded-full bg-[var(--main-color)] opacity-20 animate-float-delayed pointer-events-none" />

      {/* ── Text Content ── */}
      <div className="max-w-[62rem] z-10 text-center md:text-left mt-12 md:mt-0">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold text-[var(--main-color)] mb-3 tracking-widest uppercase"
        >
          Hello, It&apos;s Me 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight"
        >
          I&apos;m{" "}
          <span className="gradient-text-animated">Abhay Dubey</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold mb-8 text-[var(--text-muted)]"
        >
          And I&apos;m a{" "}
          <span className="text-white font-bold">{currentWord}</span>
          <span className="text-[var(--main-color)] animate-blink">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--text-muted)] mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
        >
          I craft high-performance, beautiful, and interactive digital
          experiences. Blending premium design with modern web technologies, I
          bring ideas to life on the screen.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-4 mb-10 justify-center md:justify-start"
        >
          {[
            { href: "https://github.com/Abhay1777",                         Icon: Github,   label: "GitHub"   },
            { href: "https://www.linkedin.com/in/abhay-dubey-67753a312/",   Icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--bg-color)] hover:shadow-[0_0_20px_var(--main-color)] hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link href="#projects" className="btn-primary">
            View My Work
            <ArrowDown size={18} />
          </Link>
          <Link href="#contact" className="btn-outline">
            Let&apos;s Talk
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-[var(--main-color)] border border-[rgba(56,189,248,0.3)] hover:bg-[rgba(56,189,248,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            Resume <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* ── Orbit Animation ── */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="flex-1 flex justify-center items-center relative"
      >
        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex justify-center items-center">
          {/* Center morphing shape */}
          <motion.div
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[52%] h-[52%] bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] shadow-[0_0_40px_rgba(56,189,248,0.4),0_0_80px_rgba(129,140,248,0.3)]"
          />

          {/* Inner orbit — React */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full rounded-full border border-dashed border-[rgba(255,255,255,0.12)]"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -left-7 transform -translate-y-1/2 text-[#61dafb] bg-[var(--second-bg-color)] rounded-full p-2 text-3xl shadow-[0_0_12px_rgba(97,218,251,0.4)]"
            >
              <SiReact />
            </motion.div>
          </motion.div>

          {/* Middle orbit — Node.js */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[140%] h-[140%] rounded-full border border-dashed border-[rgba(129,140,248,0.18)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-7 transform -translate-y-1/2 text-[var(--accent-color)] bg-[var(--second-bg-color)] rounded-full p-2 text-3xl shadow-[0_0_12px_rgba(129,140,248,0.4)]"
            >
              <SiNodedotjs />
            </motion.div>
          </motion.div>

          {/* Outer orbit — Python top, TypeScript bottom */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[190%] h-[190%] rounded-full border border-dashed border-[rgba(251,191,36,0.12)]"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#fbbf24] bg-[var(--second-bg-color)] rounded-full p-2 text-3xl shadow-[0_0_12px_rgba(251,191,36,0.35)]"
            >
              <SiPython />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[#38bdf8] bg-[var(--second-bg-color)] rounded-full p-2 text-3xl shadow-[0_0_12px_rgba(56,189,248,0.35)]"
            >
              <SiTypescript />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-xs uppercase tracking-[3px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
