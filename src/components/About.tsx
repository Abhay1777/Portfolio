"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, CheckCircle, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
  SiTypescript, SiTailwindcss, SiPython, SiHtml5,
  SiCss, SiGit, SiAndroid, SiFirebase, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const stats = [
  { end: 15, suffix: "+", label: "GitHub Repos"    },
  { end: 3,  suffix: "+", label: "Android Projects" },
  { end: 2,  suffix: "k+",label: "Hours Coded"      },
];

const skillIcons = [
  { Icon: SiReact,       name: "React",      color: "#61dafb" },
  { Icon: SiNextdotjs,   name: "Next.js",    color: "#ffffff" },
  { Icon: SiNodedotjs,   name: "Node.js",    color: "#68a063" },
  { Icon: SiJavascript,  name: "JavaScript", color: "#f7df1e" },
  { Icon: SiTypescript,  name: "TypeScript", color: "#3178c6" },
  { Icon: SiTailwindcss, name: "Tailwind",   color: "#38bdf8" },
  { Icon: FaJava,        name: "Java",       color: "#f89820" },
  { Icon: SiPython,      name: "Python",     color: "#fbbf24" },
  { Icon: SiHtml5,       name: "HTML5",      color: "#e34f26" },
  { Icon: SiCss,         name: "CSS3",       color: "#264de4" },
  { Icon: SiAndroid,     name: "Android",    color: "#3ddc84" },
  { Icon: SiFirebase,    name: "Firebase",   color: "#ffca28" },
  { Icon: SiGit,         name: "Git",        color: "#f05032" },
  { Icon: SiGithub,      name: "GitHub",     color: "#ffffff" },
];

// Duplicate for infinite marquee
const marqueeSkills = [...skillIcons, ...skillIcons];

const highlights = [
  "Passionate about clean, scalable architecture",
  "Strong problem-solving & DSA foundation",
  "Experience with Android & full-stack web",
  "Interned at V2VEDtech — real world exposure",
];

const timeline = [
  {
    icon: GraduationCap,
    title: "B.E. Information Technology",
    subtitle: "2nd Year Student",
    period: "2023 – Present",
    color: "#3abff8",
  },
  {
    icon: Briefcase,
    title: "Tech Internship",
    subtitle: "V2VEDtech",
    period: "2024",
    color: "#a78bfa",
  },
  {
    icon: BookOpen,
    title: "Android Development",
    subtitle: "Java, Android Studio",
    period: "2024 – Present",
    color: "#34d399",
  },
];

// Animated counter using Framer Motion (replaces react-countup + react-intersection-observer)
function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <CountValue from={0} to={end} suffix={suffix} />
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}

function CountValue({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect: {
    // Use requestAnimationFrame for smooth counting
    let start: number | null = null;
    const duration = 2200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(from + (to - from) * eased);
      if (ref.current) ref.current.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return <span ref={ref}>{`${from}${suffix}`}</span>;
}

export default function About() {
  return (
    <section id="about" className="section bg-[var(--second-bg-color)]">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--main-color)] to-transparent opacity-20 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <span className="section-label">01 — About</span>
        </div>
        <h2 className="heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="heading-sub">
          A second-year IT student from Mumbai, building practical software that solves real problems.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row gap-14 items-start max-w-6xl mx-auto">

        {/* LEFT — Profile + Timeline + Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 min-w-0"
        >
          {/* Avatar card */}
          <div className="relative mb-8 p-5 glass-panel rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/5 to-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(58,191,248,0.15)]">
                  <Image
                    src="/profile.jpg"
                    alt="Abhay Dubey profile picture"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--success-color)] rounded-full border-2 border-[var(--second-bg-color)] animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Abhay Dubey</h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">IT Engineering Student</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="tag text-[10px]">Open to Work</span>
                  <span className="tag tag-accent text-[10px]">Mumbai, India</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
              I&apos;m a second-year IT engineering student with a solid foundation in{" "}
              <span className="text-white font-medium">Java, C, and C++</span>. I build
              practical, real-world applications — from Android apps to full-stack web. Currently
              deepening my skills in React, Next.js, and problem-solving.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Journey
            </h4>
            {timeline.map(({ icon: Icon, title, subtitle, period, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-all"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white leading-none">{title}</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{subtitle}</div>
                </div>
                <span className="text-[10px] font-mono-custom text-[var(--text-subtle)] whitespace-nowrap">{period}</span>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.4 }}
                className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
              >
                <CheckCircle size={14} className="text-[var(--main-color)] shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — Stats + Skill Marquee + Currently Exploring + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 min-w-0"
        >
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {stats.map(({ end, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="relative p-4 glass-panel rounded-2xl text-center overflow-hidden group hover:-translate-y-1 transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="text-2xl xl:text-3xl font-black gradient-text font-display mb-1 leading-none">
                  <AnimatedCounter end={end} suffix={suffix} />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skill Marquee */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Tech Stack
            </h4>

            {/* Row 1 */}
            <div className="relative overflow-hidden mb-2.5 py-1">
              <div className="flex gap-2.5 animate-marquee">
                {marqueeSkills.map(({ Icon, name, color }, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg text-sm font-medium whitespace-nowrap shrink-0 hover:border-white/20 transition-colors"
                  >
                    <Icon style={{ color }} size={14} />
                    <span className="text-[var(--text-muted)] text-xs">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 (reversed) */}
            <div className="relative overflow-hidden py-1">
              <div
                className="flex gap-2.5"
                style={{ animation: "marquee 32s linear infinite reverse" }}
              >
                {[...marqueeSkills].reverse().map(({ Icon, name, color }, i) => (
                  <div
                    key={`${name}-rev-${i}`}
                    className="flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg text-sm font-medium whitespace-nowrap shrink-0 hover:border-white/20 transition-colors"
                  >
                    <Icon style={{ color }} size={14} />
                    <span className="text-[var(--text-muted)] text-xs">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently exploring */}
          <div className="p-4 rounded-2xl border border-[var(--accent-color)]/20 bg-[var(--accent-color)]/[0.04] mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse" />
              <span className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-widest">
                Currently Exploring
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Advanced React patterns, system design, competitive programming, and deepening my
              understanding of{" "}
              <span className="text-white font-medium">full-stack architecture</span>.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/Abhay_Dubey_CV.pdf"
            download
            className="btn-primary w-full justify-center rounded-xl"
          >
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Inline useEffect for CountValue — avoiding hook rules violation
import { useEffect } from "react";
