"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";

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

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(sprY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(sprX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const translateX = useTransform(sprX, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(sprY, [-0.5, 0.5], ["-20px", "20px"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-[5%] md:px-[9%] pt-32 pb-16 relative overflow-hidden scanlines bg-[#030712]"
    >
      {/* ── Advanced Background ── */}
      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Dynamic Nebula Blobs */}
      <motion.div 
        style={{ x: translateX, y: translateY }}
        className="absolute top-[15%] right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,rgba(6,11,25,0)_70%)] rounded-full -z-10 blur-[90px] animate-pulse-energy pointer-events-none" 
      />
      <motion.div 
        style={{ x: useTransform(translateX, (v) => -parseFloat(v)), y: useTransform(translateY, (v) => -parseFloat(v)) }}
        className="absolute bottom-[10%] left-[5%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(129,140,248,0.1)_0%,rgba(6,11,25,0)_70%)] rounded-full -z-10 blur-[90px] pointer-events-none animate-float" 
      />

      {/* ── Text Content ── */}
      <div className="max-w-[62rem] z-10 text-center md:text-left mt-12 md:mt-0 perspective-1000">
        <motion.div
           style={{ rotateX, rotateY }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4 justify-center md:justify-start"
          >
            <Sparkles className="text-[var(--main-color)] animate-pulse" size={20} />
            <span className="text-sm font-bold text-[var(--main-color)] tracking-[0.3em] uppercase">
              The Digital Canvas of
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-6xl md:text-8xl font-black leading-tight mb-4 tracking-tighter"
          >
            <span className="relative inline-block">
              Abhay
              <span className="absolute -inset-1 blur-2xl bg-[var(--main-color)] opacity-20 -z-10" />
            </span>
            <br />
            <span className="gradient-text-animated animate-glitch relative">
              Dubey
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--main-color)] to-transparent hidden md:block" />
            <h2 className="text-xl md:text-2xl font-medium text-[var(--text-muted)]">
              I am a <span className="text-white font-bold underline decoration-[var(--main-color)] decoration-2 underline-offset-8">{currentWord}</span>
              <span className="text-[var(--main-color)] animate-blink ml-1">_</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-[var(--text-muted)] mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
          >
            Engineering premium digital interfaces where 
            <span className="text-white"> code</span> meets 
            <span className="text-white"> creativity</span>. Transforming complex problems into elegant, high-performance solutions.
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mb-12 justify-center md:justify-start"
          >
            {[
              { href: "https://github.com/Abhay1777", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/abhay-dubey-67753a312/", Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--bg-color)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Icon size={24} className="relative z-10" />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link href="#projects" className="btn-primary group relative overflow-hidden px-10 py-4 text-lg">
              <span className="relative z-10 flex items-center gap-3">
                Explore Work <Sparkles size={18} />
              </span>
            </Link>
            <Link href="#contact" className="btn-outline px-10 py-4 text-lg bg-white/5 border-white/20 hover:bg-white/10">
              Let&apos;s Sync
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Professional Orbit Display ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 flex justify-center items-center relative"
      >
        <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex justify-center items-center">
          {/* Main Visual Core */}
          <motion.div
             style={{ x: useTransform(translateX, (v) => parseFloat(v) * -0.5), y: useTransform(translateY, (v) => parseFloat(v) * -0.5) }}
             className="relative z-20"
          >
             <motion.div
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] shadow-[0_0_60px_rgba(56,189,248,0.5),0_0_120px_rgba(129,140,248,0.2)] flex items-center justify-center p-1"
            >
               <div className="w-full h-full bg-[#030712] rounded-[inherit] overflow-hidden flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <span className="text-6xl md:text-8xl font-black text-white mix-blend-overlay opacity-20">AD</span>
                  <div className="text-white z-10 flex flex-col items-center">
                     <SiReact size={60} className="animate-[spin_10s_linear_infinite]" />
                  </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Orbiting Rings */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Ring 1 - Fast */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-[var(--main-color)] opacity-20 rounded-full"
            />
            {/* Ring 2 - Reverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-dotted border-[var(--accent-color)] opacity-10 rounded-full"
            />
            {/* Ring 3 - Largest */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 border border-[var(--glass-border)] rounded-full"
            />
          </div>

          {/* Floating Icons */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[#61dafb] shadow-xl">
                <SiReact size={24} />
             </div>
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[#818cf8] shadow-xl">
                <SiNodedotjs size={24} />
             </div>
          </motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute -inset-10">
             <div className="absolute top-1/2 -left-6 -translate-y-1/2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[#fbbf24] shadow-xl">
                <SiPython size={24} />
             </div>
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute -inset-10">
             <div className="absolute top-1/2 -right-6 -translate-y-1/2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[#38bdf8] shadow-xl">
                <SiTypescript size={24} />
             </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--text-muted)] group cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] group-hover:text-white transition-colors">Digital Journey</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[var(--main-color)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
