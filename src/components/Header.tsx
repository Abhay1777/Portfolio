"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home",     href: "#home"     },
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];

export default function Header() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileOpen, setIsMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sectionIds = navLinks.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // iOS-safe body scroll lock: use position fixed + scroll position preservation
  useEffect(() => {
    if (isMobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 px-[5%] md:px-[9%] bg-[rgba(5,10,20,0.88)] backdrop-blur-xl border-b border-white/[0.05]"
            : "py-6 px-[5%] md:px-[9%] bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group" aria-label="Abhay Dubey — Home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--main-color)] to-[var(--accent-color)] flex items-center justify-center shadow-[0_0_20px_rgba(58,191,248,0.3)] group-hover:shadow-[0_0_30px_rgba(58,191,248,0.5)] transition-shadow">
              <span className="text-sm font-black italic text-white font-display">AD</span>
            </div>
            <span className="hidden sm:block text-base font-bold tracking-tight text-white group-hover:text-[var(--main-color)] transition-colors font-display">
              Abhay<span className="text-[var(--main-color)]">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ name, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={name}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-colors duration-300 pb-1 group ${
                    isActive ? "text-[var(--main-color)]" : "text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[var(--main-color)] to-[var(--accent-color)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Abhay_Dubey_CV.pdf"
              download
              className="btn-outline flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl"
              aria-label="Download Resume PDF"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 h-full w-72 z-50 bg-[var(--second-bg-color)] border-l border-[var(--glass-border)] flex flex-col pt-24 px-8 gap-2 md:hidden"
              aria-label="Mobile navigation"
            >
              {/* Ambient glow */}
              <div className="absolute top-20 right-0 w-40 h-40 bg-[var(--main-color)] opacity-5 blur-3xl rounded-full pointer-events-none" />

              {navLinks.map(({ name, href }, i) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={handleNavClick}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-3 py-4 text-base font-semibold tracking-wide border-b border-white/5 transition-all duration-200 font-display ${
                        isActive ? "text-[var(--main-color)]" : "text-[var(--text-muted)] hover:text-white"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-[var(--main-color)] transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="mt-6"
              >
                <a
                  href="/Abhay_Dubey_CV.pdf"
                  download
                  onClick={handleNavClick}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
