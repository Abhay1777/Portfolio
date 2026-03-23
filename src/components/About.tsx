"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Download, CheckCircle } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
  SiTypescript, SiTailwindcss, SiPython, SiHtml5,
  SiCss, SiGit, SiAndroid, SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const stats = [
  { end: 2,    suffix: "nd", label: "Year\nStudent",      decimals: 0 },
  { end: 1,    suffix: "",   label: "Tech\nInternship",   decimals: 0 },
  { end: 3,    suffix: "+",  label: "Android\nProjects",  decimals: 0 },
];

const skillIcons = [
  { Icon: SiReact,        name: "React",      color: "#61dafb" },
  { Icon: SiNextdotjs,    name: "Next.js",    color: "#ffffff" },
  { Icon: SiNodedotjs,    name: "Node.js",    color: "#68a063" },
  { Icon: SiJavascript,   name: "JavaScript", color: "#f7df1e" },
  { Icon: SiTypescript,   name: "TypeScript", color: "#3178c6" },
  { Icon: SiTailwindcss,  name: "Tailwind",   color: "#38bdf8" },
  { Icon: FaJava,         name: "Java",       color: "#f89820" },
  { Icon: SiPython,       name: "Python",     color: "#fbbf24" },
  { Icon: SiHtml5,        name: "HTML5",      color: "#e34f26" },
  { Icon: SiCss,         name: "CSS3",       color: "#264de4" },
  { Icon: SiAndroid,      name: "Android",    color: "#3ddc84" },
  { Icon: SiFirebase,     name: "Firebase",   color: "#ffca28" },
  { Icon: SiGit,          name: "Git",        color: "#f05032" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="section bg-[var(--second-bg-color)]">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--main-color)] to-transparent opacity-30" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-[420px] lg:max-w-full relative"
        >
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] opacity-10 blur-xl animate-pulse-ring" />
          <div className="relative rounded-2xl overflow-hidden glass-panel p-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Abhay Dubey"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,11,25,0.5)] to-transparent pointer-events-none" />
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
          >
            ✨ Open to Work
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex-[1.2] w-full">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-6"
          >
            Building practical,{" "}
            <span className="gradient-text">real-world</span> applications.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-[var(--text-muted)] space-y-4 mb-10 leading-relaxed"
          >
            <p>
              I am a second-year Information Technology engineering student with
              a strong foundation in Java, C, and C++. I focus on building
              practical, real-world applications rather than just theoretical
              knowledge.
            </p>
            <p>
              I have developed Android-based projects including a Tic-Tac-Toe
              game and a Stopwatch application. Currently, I&apos;m exploring
              full-stack web development and strengthening my problem-solving
              skills. I also completed an internship at{" "}
              <strong className="text-white">V2VEDtech</strong>.
            </p>
          </motion.div>

          {/* Highlights list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-2 mb-10"
          >
            {[
              "Passionate about clean, scalable code",
              "Strong problem-solving & DSA foundation",
              "Experience with Android & Web development",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                <CheckCircle size={16} className="text-[var(--main-color)] shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Animated Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-[var(--glass-border)]"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h4 className="text-4xl md:text-5xl font-bold gradient-text mb-1">
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  ) : (
                    "0"
                  )}
                </h4>
                <p className="text-xs text-[var(--text-muted)] whitespace-pre-line leading-tight uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-5 text-[var(--text-muted)] uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {skillIcons.map(({ Icon, name, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default group"
                >
                  <Icon className="text-lg transition-transform group-hover:scale-110" style={{ color }} />
                  <span className="text-[var(--text-muted)] group-hover:text-white transition-colors">{name}</span>
                </div>
              ))}
            </div>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex w-fit"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
