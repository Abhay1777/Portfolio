"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 100;

    const increment = () => {
      const remaining = target - current;
      const step = Math.max(1, Math.floor(remaining * 0.08 + Math.random() * 5));
      current = Math.min(target, current + step);
      setProgress(current);

      if (current < target) {
        const delay = current > 85 ? 120 : current > 60 ? 60 : 40;
        setTimeout(increment, delay);
      } else {
        // Clean single exit: short pause then unmount
        setTimeout(() => setLoading(false), 700);
      }
    };

    const start = setTimeout(increment, 300);
    return () => clearTimeout(start);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050a14] overflow-hidden"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 tech-grid opacity-40" />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--main-color)] opacity-5 blur-[100px]" />

          {/* Core content */}
          <div className="relative z-10 flex flex-col items-center gap-10">

            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Spinning rings */}
              <div
                className="absolute -inset-4 border border-[var(--main-color)]/20 rounded-full"
                style={{ animation: "spin-slow 6s linear infinite" }}
              />
              <div
                className="absolute -inset-8 border border-[var(--accent-color)]/10 rounded-full"
                style={{ animation: "spin-slow 10s linear infinite reverse" }}
              />

              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] flex items-center justify-center shadow-[0_0_40px_rgba(58,191,248,0.4)]">
                <span className="text-2xl font-black text-white font-display italic tracking-tight">AD</span>
              </div>
            </motion.div>

            {/* Progress section */}
            <div className="flex flex-col items-center gap-4 w-64">
              {/* Progress bar */}
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, var(--main-color), var(--accent-color))",
                    boxShadow: "0 0 10px rgba(58, 191, 248, 0.6)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              {/* Status text */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-mono-custom font-semibold text-[var(--text-muted)] tracking-widest uppercase">
                  {progress < 30 ? "Initializing..." : progress < 60 ? "Loading assets..." : progress < 90 ? "Almost ready..." : "Launching..."}
                </span>
                <span className="text-[11px] font-mono-custom font-bold text-[var(--main-color)]">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
