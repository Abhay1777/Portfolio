"use client";

import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/Abhay1777",                        Icon: Github,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/abhay-dubey-67753a312/",  Icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:abhaydubey1177@gmail.com",                     Icon: Mail,     label: "Email"    },
];

export default function Footer() {
  return (
    <footer className="py-8 px-[5%] md:px-[9%] bg-[var(--second-bg-color)] border-t border-[var(--glass-border)]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left — name */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-[var(--text-muted)]">
            Designed &amp; built by{" "}
            <span className="text-white font-semibold">Abhay Dubey</span>
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[var(--text-muted)] mt-1">
            <p>Made with</p>
            <Heart size={12} className="text-[#e11d48] fill-current" />
            <p>&amp; Next.js &copy; {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Center — social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-[var(--main-color)] hover:border-[var(--main-color)] hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Right — scroll to top */}
        <Link
          href="#home"
          aria-label="Scroll to top"
          className="inline-flex justify-center items-center p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
          style={{
            background: "linear-gradient(135deg, var(--main-color), var(--accent-color))",
            boxShadow: "0 4px 15px rgba(56,189,248,0.2)",
          }}
        >
          <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
        </Link>
      </div>
    </footer>
  );
}
