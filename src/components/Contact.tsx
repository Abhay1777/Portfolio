"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare, Linkedin, CheckCircle, XCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/abhaydubey1177@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "abhaydubey1177@gmail.com",
      href: "mailto:abhaydubey1177@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abhay-dubey-67753a312",
      href: "https://www.linkedin.com/in/abhay-dubey-67753a312/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section relative">
      {/* Bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(129,140,248,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="heading"
      >
        Get in <span className="gradient-text">Touch</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-12 bg-[var(--second-bg-color)] p-8 md:p-12 rounded-3xl border border-[var(--glass-border)] relative overflow-hidden"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--main-color)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-color)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing</span> together
          </h3>
          <p className="text-base text-[var(--text-muted)] mb-10 leading-relaxed max-w-md">
            I&apos;m currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to say hi — I&apos;ll get
            back to you!
          </p>

          <div className="space-y-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-5 group hover:-translate-y-1 transition-transform"
              >
                <div className="w-13 h-13 w-14 h-14 bg-[rgba(56,189,248,0.08)] border border-[rgba(56,189,248,0.15)] rounded-full flex items-center justify-center text-[var(--main-color)] group-hover:bg-[var(--main-color)] group-hover:text-[var(--bg-color)] group-hover:shadow-[0_0_15px_var(--main-color)] transition-all duration-300 shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-base font-medium hover:text-[var(--main-color)] transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-base font-medium break-words">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-[1.2]">
          <form
            ref={formRef}
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative w-full">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[var(--main-color)] focus:bg-white/8 transition-all placeholder-[var(--text-muted)]"
                />
              </div>
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[var(--main-color)] focus:bg-white/8 transition-all placeholder-[var(--text-muted)]"
                />
              </div>
            </div>

            <div className="relative w-full">
              <MessageSquare className="absolute left-4 top-4 text-[var(--text-muted)]" size={18} />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[var(--main-color)] focus:bg-white/8 transition-all placeholder-[var(--text-muted)] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              id="contact-submit"
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, var(--main-color), var(--accent-color))",
                boxShadow: "0 4px 15px rgba(56,189,248,0.3)",
              }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                {status === "sending" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </span>
            </button>

            {/* Status feedback */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.25)] text-[#4ade80] text-sm font-medium"
                >
                  <CheckCircle size={18} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.25)] text-[#f87171] text-sm font-medium"
                >
                  <XCircle size={18} />
                  Something went wrong. Please try again or email directly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
