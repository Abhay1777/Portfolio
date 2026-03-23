"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Sparkles, Terminal, Cpu } from "lucide-react";
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

  // Mouse Parallax for Playful Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(sprY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(sprX, [-0.5, 0.5], ["-15deg", "15deg"]);
  const translateX = useTransform(sprX, [-0.5, 0.5], ["-30px", "30px"]);
  const translateY = useTransform(sprY, [-0.5, 0.5], ["-30px", "30px"]);

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
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-[5%] md:px-[9%] pt-32 pb-16 relative overflow-hidden scanlines bg-[#020617]"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(var(--main-color) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none" />

      {/* ── Playful Text Content ── */}
      <div className="max-w-[62rem] z-10 text-center md:text-left mt-12 md:mt-0 perspective-1000">
        <motion.div style={{ rotateX, rotateY }}>
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[var(--main-color)]/10 border border-[var(--main-color)]/20 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
          >
            <Sparkles className="text-[var(--main-color)]" size={14} />
            <span className="text-[10px] font-black text-[var(--main-color)] tracking-[0.4em] uppercase">
              Creative Tech Interface
            </span>
          </motion.div>

          {/* Dashing Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-[5.5rem] font-black leading-[1.1] mb-6 tracking-tighter"
          >
            I&apos;m <span className="text-white relative">
              Abhay
              <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--main-color)] to-transparent opacity-30" />
            </span>
            <br />
            <span className="gradient-text-animated animate-glitch relative italic">
               Dubey.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <div className="h-[1px] w-8 bg-[var(--main-color)] hidden md:block" />
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-muted)] flex items-center gap-2">
              <span className="text-white font-black">{currentWord}</span>
              <motion.span 
                 animate={{ opacity: [1, 0] }}
                 transition={{ duration: 0.8, repeat: Infinity }}
                 className="w-1.5 h-6 bg-[var(--main-color)]" 
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-[var(--text-muted)] mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
          >
            Designing high-fidelity <span className="text-[var(--main-color)] font-bold">digital systems</span> where code and creativity collide. Every line intentional, every pixel perfect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-12 justify-center md:justify-start"
          >
            <Link href="#projects" className="btn-primary px-8 py-3.5 flex items-center gap-3">
              Explore Projects <ArrowDown size={18} />
            </Link>
            <Link href="#contact" className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-widest">
              Hire Me
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 justify-center md:justify-start opacity-70 hover:opacity-100 transition-opacity"
          >
            {[
              { href: "https://github.com/Abhay1777", Icon: Github },
              { href: "https://www.linkedin.com/in/abhay-dubey-67753a312/", Icon: Linkedin },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} className="text-white hover:text-[var(--main-color)] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Playful High-Tech HUD ── */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="flex-1 flex justify-center items-center relative"
      >
        <div className="relative w-[360px] h-[360px] md:w-[500px] md:h-[500px] flex justify-center items-center">
          
          {/* Background Pulse Glow */}
          <div className="absolute inset-0 bg-[var(--main-color)]/5 rounded-full filter blur-[100px] animate-pulse-energy" />

          {/* HUD Frame */}
          <motion.div 
             style={{ x: translateX, y: translateY, rotateX, rotateY }}
             className="relative w-full h-full flex items-center justify-center p-8"
          >
            {/* Visual Glass Cards */}
            <div className="relative w-full h-full">
              
              {/* Main App Window */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square glass-panel border border-white/10 shadow-2xl flex flex-col overflow-hidden"
              >
                 <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                 </div>
                 <div className="flex-1 p-6 relative flex items-center justify-center">
                    <SiReact size={80} className="text-[var(--main-color)] animate-[spin_12s_linear_infinite] drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-40 leading-tight">
                       # DEBUG_MODE_ENABLED<br/>
                       # REFRESH_RATE: 120HZ<br/>
                       # USER: ABHAY_DUBEY
                    </div>
                 </div>
                 <div className="h-4 bg-[var(--main-color)]/10 flex items-center justify-end px-3">
                    <div className="w-full h-[1px] bg-[var(--main-color)]/20 animate-pulse" />
                 </div>
              </motion.div>

              {/* Data Card Top Right */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-32 glass-panel p-3 border border-white/10"
              >
                 <div className="flex items-center gap-2 mb-2">
                    <Cpu size={12} className="text-[var(--main-color)]" />
                    <span className="text-[8px] font-bold tracking-widest text-white/80">CORE_LOAD</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                       animate={{ width: ["20%", "80%", "45%"] }}
                       transition={{ duration: 4, repeat: Infinity }}
                       className="h-full bg-[var(--main-color)]" 
                    />
                 </div>
              </motion.div>

              {/* Status Card Bottom Left */}
              <motion.div
                animate={{ y: [10, -10, 10], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-4 w-40 glass-panel p-4 border border-white/10 flex items-center gap-3"
              >
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] flex items-center justify-center text-white shadow-xl">
                    <Terminal size={18} />
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[7px] font-black uppercase text-[var(--main-color)] tracking-widest">Compiler</span>
                    <span className="text-[9px] font-bold text-white/90">Main.java</span>
                 </div>
              </motion.div>

              {/* Tech Orbit (Simplified Playful) */}
              <div className="absolute inset-0 pointer-events-none">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-dashed border-white/5 rounded-full"
                 />
                 <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 border border-dotted border-white/5 rounded-full"
                 />
              </div>

              {/* Icons drifting on HUD */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0"
              >
                 <div className="absolute top-10 left-10 p-2 glass-panel text-[#818cf8] animate-bounce" style={{ animationDuration: '3s' }}>
                    <SiNodedotjs size={20} />
                 </div>
              </motion.div>
              <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0"
              >
                 <div className="absolute bottom-20 right-10 p-2 glass-panel text-[#fbbf24] animate-bounce" style={{ animationDuration: '4s' }}>
                    <SiPython size={20} />
                 </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--main-color)] opacity-40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--main-color)] opacity-40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--main-color)] opacity-40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--main-color)] opacity-40" />
          
        </div>
      </motion.div>

      {/* Hero Buttons (Bottom Playful Text) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-[5%] md:left-[9%] text-[var(--text-muted)] text-[8px] font-bold uppercase tracking-[0.5em] hidden lg:block"
      >
         SYSTEM_INIT_LEVEL_1 // STATUS: OPTIMAL // READY_FOR_TRAVERSAL
      </motion.div>

    </section>
  );
}
