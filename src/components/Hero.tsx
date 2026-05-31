"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown, MapPin, Sparkles, Code2, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAndroidstudio,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const WORDS = ["Full Stack Developer", "Android Engineer", "Problem Solver", "UI Craftsman"];

const ORBIT_ICONS = [
  { Icon: SiReact,         color: "#61DAFB", name: "React"          },
  { Icon: SiAndroidstudio, color: "#3DDC84", name: "Android Studio" },
  { Icon: SiNodedotjs,     color: "#339933", name: "Node.js"        },
  { Icon: SiFirebase,      color: "#FFCA28", name: "Firebase"       },
  { Icon: SiPython,        color: "#3776AB", name: "Python"         },
  { Icon: FaJava,          color: "#f89820", name: "Java"           },
  { Icon: SiTypescript,    color: "#3178C6", name: "TypeScript"     },
];

const STATS = [
  { icon: Code2,      value: "15+", label: "GitHub Repos"    },
  { icon: Smartphone, value: "3+",  label: "Android Apps"    },
  { icon: Globe,      value: "2yr", label: "Building for Web" },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting]   = useState(false);
  const [loopNum, setLoopNum]         = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Mouse parallax for the visual side
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 50, stiffness: 150, mass: 1.5 };
  const sprX = useSpring(mouseX, springCfg);
  const sprY = useSpring(mouseY, springCfg);
  const cardRotateX = useTransform(sprY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const cardRotateY = useTransform(sprX, [-0.5, 0.5], ["-6deg", "6deg"]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  // Typewriter effect
  useEffect(() => {
    const fullText = WORDS[loopNum % WORDS.length];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(fullText.substring(0, currentWord.length + 1));
        setTypingSpeed(90);
        if (currentWord.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentWord(fullText.substring(0, currentWord.length - 1));
        setTypingSpeed(45);
        if (currentWord.length - 1 === 0) {
          setIsDeleting(false);
          setLoopNum((n) => n + 1);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-[5%] lg:px-[9%] pt-28 pb-24 lg:pb-20 overflow-hidden bg-[#050a14] tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--main-color)] opacity-[0.04] blur-[120px] pointer-events-none animate-pulse-energy" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent-color)] opacity-[0.04] blur-[100px] pointer-events-none animate-pulse-energy" style={{ animationDelay: "2s" }} />

      {/* ── Text Content ── */}
      <div className="flex-1 z-10 text-center lg:text-left mt-10 lg:mt-0 max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--success-color)] animate-pulse" />
          <span className="text-xs font-semibold text-[var(--text-muted)] tracking-[0.15em] uppercase">
            Available for opportunities
          </span>
          <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
            <MapPin size={10} /> Mumbai
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[0.95] mb-6 tracking-tight text-white font-display">
            Abhay
            <br />
            <span className="gradient-text-animated">Dubey.</span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
        >
          <div className="h-px w-10 bg-gradient-to-r from-[var(--main-color)] to-transparent shrink-0" />
          <h2 className="text-lg sm:text-xl font-semibold text-white/80">
            I build as a{" "}
            <span className="text-[var(--main-color)] font-bold">
              {currentWord}
              <span className="inline-block w-[2px] h-5 bg-[var(--main-color)] ml-0.5 align-middle animate-blink" />
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base text-[var(--text-muted)] mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
        >
          Building polished interfaces for <span className="text-white font-semibold">Android</span> and{" "}
          <span className="text-white font-semibold">Web</span>. Passionate about performance, clean
          architecture, and delightful user experiences.
        </motion.p>

        {/* Stats — visible on all screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-6 justify-center lg:justify-start mb-8"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-8 h-8 glass-panel flex items-center justify-center rounded-lg shrink-0">
                <Icon size={14} className="text-[var(--main-color)]" />
              </div>
              <div>
                <div className="text-base font-black text-white font-display leading-none">{value}</div>
                <div className="text-[9px] text-[var(--text-muted)] tracking-wider uppercase font-semibold whitespace-nowrap">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
        >
          <Link href="#projects" className="btn-primary px-7 py-3.5 text-sm rounded-xl">
            <Sparkles size={16} />
            View Projects
          </Link>
          <Link href="#contact" className="btn-outline px-7 py-3.5 text-sm rounded-xl">
            Get in Touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-4 justify-center lg:justify-start"
        >
          <a
            href="https://github.com/Abhay1777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-10 h-10 glass-panel flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--main-color)] hover:border-[var(--main-color)]/30 hover:shadow-[0_0_15px_rgba(58,191,248,0.2)] transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-dubey-67753a312/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-10 h-10 glass-panel flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/30 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <div className="h-px w-12 bg-[var(--glass-border)]" />
          <span className="text-xs text-[var(--text-subtle)] font-mono-custom tracking-widest uppercase">
            @abhay1777
          </span>
        </motion.div>
      </div>

      {/* ── Visual Side — Avatar + Orbit ── */}
      <motion.div
        className="flex-1 flex justify-center items-center relative perspective-1200 mb-8 lg:mb-0 order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
          className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
        >
          {/* Outer ring glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] opacity-10 blur-2xl animate-pulse-ring" />

          {/* Spinning decorative rings */}
          <div
            className="absolute inset-[-20px] border border-[var(--main-color)]/15 rounded-full"
            style={{ animation: "spin-slow 12s linear infinite" }}
          />
          <div
            className="absolute inset-[-40px] border border-dashed border-[var(--accent-color)]/10 rounded-full"
            style={{ animation: "spin-slow 20s linear infinite reverse" }}
          />

          {/* Avatar circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--main-color)]/20 to-[var(--accent-color)]/20 border border-white/10 overflow-hidden backdrop-blur-sm flex items-center justify-center group">
            <div className="relative w-full h-full">
              <Image
                src="/profile.jpg"
                alt="Abhay Dubey profile picture"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/20 to-transparent opacity-80" />

              {/* Name overlay */}
              <div className="absolute bottom-7 left-0 right-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold text-white font-display tracking-wide drop-shadow-md">
                  Abhay Dubey
                </span>
                <span className="text-[9px] text-[var(--main-color)] font-mono-custom mt-0.5 tracking-widest uppercase font-semibold">
                  &lt; System.init /&gt;
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--main-color)]/5 to-transparent pointer-events-none" />
          </div>

          {/* Orbiting tech icons — hidden on xs, shown on sm+ to prevent overflow */}
          {ORBIT_ICONS.map(({ Icon, color, name }, i) => {
            // Calculate position on the circle (360/7 ≈ 51.4° per icon)
            const angle = (i * 360) / ORBIT_ICONS.length;
            const rad = (angle * Math.PI) / 180;
            // Radius as % of container — kept inside the outer ring
            const radius = 52;
            const x = 50 + radius * Math.cos(rad - Math.PI / 2);
            const y = 50 + radius * Math.sin(rad - Math.PI / 2);
            return (
              <motion.div
                key={name}
                className="absolute hidden sm:block"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <div
                  className="w-9 h-9 glass-panel flex items-center justify-center rounded-xl shadow-lg"
                  style={{ borderColor: `${color}25`, boxShadow: `0 4px 16px ${color}18` }}
                  title={name}
                >
                  <Icon size={17} color={color} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-[9%] hidden lg:block"
      >
        <Link
          href="#about"
          aria-label="Scroll to About"
          className="flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-[var(--main-color)] transition-colors group"
        >
          <span className="tracking-widest uppercase font-semibold">Scroll</span>
          <div className="w-7 h-7 glass-panel flex items-center justify-center rounded-lg group-hover:border-[var(--main-color)]/30 transition-all">
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
