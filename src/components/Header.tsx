"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveMenu(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",     href: "#home"     },
    { name: "About",    href: "#about"    },
    { name: "Skills",   href: "#skills"   },
    { name: "Projects", href: "#projects" },
    { name: "Contact",  href: "#contact"  },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 px-[5%] md:px-[9%] bg-[rgba(6,11,25,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          : "py-6 px-[5%] md:px-[9%] bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          href="#home"
          className="relative text-2xl md:text-3xl font-black tracking-tighter text-white group"
        >
          <span className="relative z-10">Abhay</span>
          <span className="text-[var(--main-color)] group-hover:animate-glitch inline-block">.</span>
          <span className="absolute -inset-x-2 -inset-y-1 bg-white/5 rounded-lg -z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeMenu === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative pb-1 group uppercase tracking-wider ${
                  isActive
                    ? "text-[var(--main-color)]"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[rgba(6,11,25,0.98)] backdrop-blur-xl border-t border-b border-[rgba(255,255,255,0.07)] flex flex-col py-6 px-[8%] space-y-2 md:hidden origin-top"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-semibold transition-colors ${
                    activeMenu === link.href.replace("#", "")
                      ? "text-[var(--main-color)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
