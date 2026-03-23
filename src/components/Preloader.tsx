"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
          {/* Left Shutter */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
               x: "-100%", 
               transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.2 } 
            }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#030712] border-r border-white/10 z-20 flex items-center justify-end"
          >
             {/* Teeth Pattern Left */}
             <div className="flex flex-col h-full justify-around opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                   <div key={i} className="w-8 h-px bg-white" />
                ))}
             </div>
          </motion.div>

          {/* Right Shutter */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
               x: "100%", 
               transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.2 } 
            }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#030712] border-l border-white/10 z-20 flex items-center justify-start"
          >
             {/* Teeth Pattern Right */}
             <div className="flex flex-col h-full justify-around opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                   <div key={i} className="w-8 h-px bg-white" />
                ))}
             </div>
          </motion.div>

          {/* Center Loading Core */}
          <motion.div
            exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-30 flex flex-col items-center"
          >
            {/* The Orb */}
            <div className="relative w-24 h-24 mb-6">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-2 border-[var(--main-color)] rounded-full border-t-transparent"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-2 border border-white/10 rounded-full border-b-transparent"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-black text-white">{progress}%</span>
               </div>
            </div>

            <motion.h2 
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-[10px] uppercase tracking-[0.5em] text-[var(--main-color)] font-bold"
            >
               Vault Initializing
            </motion.h2>
          </motion.div>

          {/* Background Data Rain */}
          <div className="absolute inset-0 z-10 opacity-10 flex flex-wrap gap-4 p-8 pointer-events-none">
             {Array.from({ length: 200 }).map((_, i) => (
                <span key={i} className="text-[6px] font-mono text-white/50">{Math.random().toString(16).slice(2, 5)}</span>
             ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
