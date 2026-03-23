"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Sparkles, Terminal, Smartphone, Layout, Code2 } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiAndroidstudio,
  SiFirebase,
  SiJavascript
} from "react-icons/si";

export default function Hero() {
  const words = ["Full Stack Developer", "Android Enthusiast", "Problem Solver"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [activeHologram, setActiveHologram] = useState(0);

  const techStack = [
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiAndroidstudio, color: "#3DDC84", name: "Android" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiPython, color: "#3776AB", name: "Python" },
  ];

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 2 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(sprY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(sprX, [-0.5, 0.5], ["-20deg", "20deg"]);

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

  // 6-second dynamic cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHologram((prev) => (prev + 1) % techStack.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setCurrentWord(isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1));
      setTypingSpeed(isDeleting ? 40 : 90);
      if (!isDeleting && currentWord === fullText) setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && currentWord === "") { setIsDeleting(false); setLoopNum(n => n + 1); setTypingSpeed(500); }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-[5%] lg:px-[9%] pt-32 pb-16 relative overflow-hidden bg-[#030712] tech-grid">
      
      {/* ── Text Content ── */}
      <div className="flex-1 z-10 text-center lg:text-left mt-12 lg:mt-0">
        <motion.div 
           initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 p-1.5 pr-6 rounded-full bg-white/5 border border-white/10"
          >
             <div className="w-8 h-8 rounded-full bg-[var(--main-color)] flex items-center justify-center text-white scale-110 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
               <Smartphone size={16} />
             </div>
             <span className="text-[10px] font-black text-white/50 tracking-[0.4em] uppercase ml-1">The Digital Interface of</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1] mb-6 tracking-tighter text-white uppercase italic">
            Abhay
            <br />
            <span className="gradient-text-animated animate-glitch relative -ml-1">Dubey.</span>
          </h1>

          <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
             <div className="h-0.5 w-12 bg-gradient-to-r from-[var(--main-color)] to-transparent" />
             <h2 className="text-xl font-bold flex items-center gap-2 text-white/80">
                I am a <span className="text-[var(--main-color)]">{currentWord}</span>
                <motion.div animate={{ height: [0, 24, 0] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-white" />
             </h2>
          </div>

          <p className="text-base text-[var(--text-muted)] mb-14 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Building cinematic interfaces for <span className="text-white font-bold">Android</span> and <span className="text-white font-bold">Web</span>. Transforming complex ideas into smooth, interactive experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="#projects" className="btn-primary flex items-center gap-3 px-10 py-5 text-base rounded-2xl group transition-all">
              Launch Projects <Layout size={20} className="group-hover:rotate-12 transition-transform" />
            </Link>
            <Link href="#contact" className="btn-outline px-10 py-5 text-base rounded-2xl border-white/10 hover:bg-white/5">
              Sync Contacts
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── The DASHING Visual (Interactive 3D Phone Hologram) ── */}
      <div className="flex-1 flex justify-center items-center relative perspective-1000">
        <motion.div
           style={{ rotateX, rotateY, scale: 1.1 }}
           className="relative w-[340px] h-[640px] flex justify-center items-center"
        >
           {/* Phone Body */}
           <motion.div
             drag
             dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
             dragElastic={0.1}
             className="relative w-64 h-[530px] rounded-[3rem] bg-[#0f172a] border-[8px] border-[#1e293b] shadow-[0_50px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(56,189,248,0.2)] p-2 z-20 group cursor-grab active:cursor-grabbing"
           >
              {/* Screen Content */}
              <div className="w-full h-full rounded-[2.5rem] bg-[#030712] overflow-hidden relative flex flex-col items-center justify-center p-6">
                 {/* Internal HUD */}
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-50">
                    <div className="w-12 h-1 bg-white/20 rounded-full" />
                 </div>
                 
                 {/* Holographic Icon Stack (CYCLES EVERY 6 SECONDS) */}
                 <div className="relative z-10 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeHologram}
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 1.5, rotateY: -90 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-white border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.3)]"
                        style={{ color: techStack[activeHologram].color }}
                      >
                         {/* Correct Dynamic Icon Component Rendering */}
                         {(() => {
                            const ActiveIcon = techStack[activeHologram].Icon;
                            return <ActiveIcon size={54} />;
                         })()}
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className="mt-8 flex flex-col items-center gap-1">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--main-color)]">System Status</span>
                       <AnimatePresence mode="wait">
                         <motion.span 
                            key={activeHologram}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-xs font-bold text-white/80"
                          >
                           {techStack[activeHologram].name} Optimized
                         </motion.span>
                       </AnimatePresence>
                    </div>
                 </div>

                 {/* Flickering Matrix background in screen */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none text-[6px] font-mono p-4 flex flex-wrap gap-1 leading-none">
                    {Array.from({ length: 150 }).map((_, i) => (
                       <span key={i}>{Math.random() > 0.5 ? "0" : "1"}</span>
                    ))}
                 </div>
              </div>

              {/* Hardware Elements */}
              <div className="absolute top-1/2 -right-2.5 -translate-y-8 w-1 h-12 bg-white/10 rounded-l-md" />
              <div className="absolute top-1/2 -right-2.5 translate-y-8 w-1 h-6 bg-white/10 rounded-l-md" />
           </motion.div>

           {/* Holographic Orbit */}
           <div className="absolute inset-0 z-30 pointer-events-none">
              {[
                { Icon: SiAndroidstudio, color: "#3DDC84", y: -150, x: -120 },
                { Icon: SiNodedotjs, color: "#339933", y: -200, x: 100 },
                { Icon: SiFirebase, color: "#FFCA28", y: 150, x: -110 },
                { Icon: SiPython, color: "#3776AB", y: 200, x: 90 },
                { Icon: SiJavascript, color: "#F7DF1E", y: 0, x: 160 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [item.y, item.y - 20, item.y], x: [item.x, item.x + 10, item.x], rotate: [0, 10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 glass-panel border border-white/10 rounded-xl"
                  style={{ color: item.color }}
                >
                  <item.Icon size={24} />
                </motion.div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
