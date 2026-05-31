"use client";

import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

const socials = [
  { href: "https://github.com/Abhay1777",                        Icon: Github,   label: "GitHub",   color: "#3abff8" },
  { href: "https://www.linkedin.com/in/abhay-dubey-67753a312/",  Icon: Linkedin, label: "LinkedIn", color: "#a78bfa" },
  { href: "mailto:abhaydubey1177@gmail.com",                     Icon: Mail,     label: "Email",    color: "#34d399" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-[5%] md:px-[9%] bg-[var(--bg-color)] border-t border-[var(--glass-border)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left — Copyright and Designer */}
        <div className="text-center md:text-left flex-1">
          <p className="text-sm text-[var(--text-muted)] font-medium mb-1">
            Designed &amp; engineered by{" "}
            <span className="text-white font-bold font-display">Abhay Dubey</span>
          </p>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-[10px] text-[var(--text-subtle)] font-mono-custom mt-2">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>•</span>
            <span>Made with</span>
            <Heart size={10} className="text-[var(--main-color)]" />
            <span>in Mumbai</span>
          </div>
        </div>

        {/* Center — Tech Stack */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <span className="text-[9px] font-mono-custom font-semibold tracking-widest uppercase text-[var(--text-subtle)]">Built with</span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all" title="Next.js">
              <SiNextdotjs size={14} />
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#38bdf8]/50 hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all" title="Tailwind CSS">
              <SiTailwindcss size={14} />
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all" title="Framer Motion">
              <SiFramer size={14} />
            </div>
          </div>
        </div>

        {/* Right — Social Icons & Scroll Top */}
        <div className="flex-1 flex items-center justify-center md:justify-end gap-6">
          <div className="flex items-center gap-3">
            {socials.map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-white transition-all duration-300 bg-white/[0.01]"
                style={{ "--hover-color": color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${color}30`;
                  e.currentTarget.style.color = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="h-8 w-px bg-[var(--glass-border)] hidden md:block" />

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="hidden md:flex justify-center items-center w-10 h-10 rounded-xl transition-all duration-300 hover:-translate-y-1 group active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, var(--main-color), var(--accent-color))",
              boxShadow: "0 4px 15px rgba(58,191,248,0.2)",
            }}
          >
            <ArrowUp size={16} className="text-white group-hover:animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
