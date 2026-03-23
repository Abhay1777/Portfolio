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
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const terminalLines = [
    "Initializing Core Systems...",
    "Establishing Secure Connection...",
    "Loading Assets (React, Next.js, Framer)...",
    "Configuring Neural Interfaces...",
    "Optimizing Graphics Engine...",
    "Ready for User Input.",
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center font-mono overflow-hidden"
        >
          {/* Matrix-like Noise Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none text-[8px] leading-tight flex flex-wrap gap-1">
            {Array.from({ length: 1000 }).map((_, i) => (
              <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
            ))}
          </div>

          <div className="relative z-10 w-full max-w-sm px-8">
            {/* Visual Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex justify-center mb-12"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)] opacity-20 blur-xl animate-pulse-energy" />
                <span className="text-6xl font-black text-white tracking-tighter relative z-10">
                  AD<span className="text-[var(--main-color)]">.</span>
                </span>
              </div>
            </motion.div>

            {/* Terminal Lines */}
            <div className="space-y-2 mb-8 h-20 overflow-hidden text-[#4ade80]/60 text-[10px] uppercase tracking-widest">
                {terminalLines.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                            opacity: progress > (i * 15) ? 1 : 0, 
                            x: progress > (i * 15) ? 0 : -10 
                        }}
                    >
                        {`> ${line}`}
                    </motion.p>
                ))}
            </div>

            {/* Progress Bar Container */}
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)]"
              />
            </div>

            <div className="flex justify-between mt-4">
               <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">System Loading</span>
               <span className="text-[10px] text-white font-bold tabular-nums">{progress}%</span>
            </div>
          </div>

          {/* Glitch Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-50" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
