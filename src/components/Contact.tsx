"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare, Linkedin, CheckCircle, XCircle, Loader2, Download, Briefcase } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // States for floating labels
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) return; // limit to 500 chars
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Spam Honeypot Check
    if (formValues._honey) {
      // Simulate successful submission to fool bots
      setTimeout(() => {
        setStatus("success");
        setFormValues({ name: "", email: "", message: "", _honey: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }, 1000);
      return;
    }

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
        setFormValues({ name: "", email: "", message: "", _honey: "" });
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
    <section id="contact" className="section relative bg-[var(--bg-color)]">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(129,140,248,0.03)_0%,transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <span className="section-label">04 — Connect</span>
        </div>
        <h2 className="heading font-display">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="heading-sub">
          Have an idea, opportunity, or simply want to chat? Drop a message below and I&apos;ll get back to you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-12 bg-[var(--second-bg-color)] p-8 md:p-12 rounded-3xl border border-[var(--glass-border)] relative overflow-hidden max-w-5xl mx-auto"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {/* Decorative ambient blurs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--main-color)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-color)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        {/* Sidebar: Details & Resume CTA */}
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[var(--success-color)] animate-pulse" />
              <span className="text-[10px] font-bold text-[var(--success-color)] uppercase tracking-widest flex items-center gap-1.5">
                <Briefcase size={11} /> Open to Opportunities
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white font-display leading-tight">
              Let&apos;s build the <br/>
              <span className="gradient-text-animated font-black">next big thing.</span>
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-10 leading-relaxed max-w-md">
              Whether you need an elegant Android app, a performant web platform, or a dedicated developer to scale your vision — my inbox is open.
            </p>

            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center text-[var(--main-color)] group-hover:bg-[var(--main-color)] group-hover:text-[var(--bg-color)] group-hover:shadow-[0_0_15px_var(--main-color)] group-hover:border-transparent transition-all duration-300 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-subtle)] font-mono-custom uppercase tracking-widest font-semibold">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:text-[var(--main-color)] text-white/90 transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-white/90 break-words">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Resume download CTA */}
          <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
            <a
              href="/Abhay_Dubey_CV.pdf"
              download
              className="btn-outline text-xs px-6 py-3.5 rounded-xl flex items-center gap-2 tracking-wider uppercase font-bold w-full sm:w-fit justify-center"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-[1.2] z-10">
          <form
            ref={formRef}
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Honeypot Field */}
            <input
              type="text"
              name="_honey"
              value={formValues._honey}
              onChange={handleInputChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Full Name */}
            <div className="relative w-full group">
              <User className={`absolute left-4 top-[18px] transition-colors duration-300 ${
                focusedInput === "name" ? "text-[var(--main-color)]" : "text-[var(--text-subtle)]"
              }`} size={18} />
              
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none font-medium ${
                  focusedInput === "name" || formValues.name
                    ? "top-1 text-[9px] text-[var(--main-color)] uppercase tracking-wider font-bold"
                    : "top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"
                }`}
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formValues.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                className={`w-full bg-white/[0.02] border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all placeholder-transparent ${
                  focusedInput === "name" 
                    ? "border-[var(--main-color)] bg-white/[0.04] shadow-[0_0_15px_rgba(58,191,248,0.08)]" 
                    : "border-white/10 focus:border-[var(--main-color)]"
                }`}
                style={{
                  paddingTop: (focusedInput === "name" || formValues.name) ? "20px" : "16px",
                  paddingBottom: (focusedInput === "name" || formValues.name) ? "12px" : "16px",
                }}
              />
            </div>

            {/* Email Address */}
            <div className="relative w-full group">
              <Mail className={`absolute left-4 top-[18px] transition-colors duration-300 ${
                focusedInput === "email" ? "text-[var(--main-color)]" : "text-[var(--text-subtle)]"
              }`} size={18} />
              
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none font-medium ${
                  focusedInput === "email" || formValues.email
                    ? "top-1 text-[9px] text-[var(--main-color)] uppercase tracking-wider font-bold"
                    : "top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"
                }`}
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formValues.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                className={`w-full bg-white/[0.02] border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all placeholder-transparent ${
                  focusedInput === "email" 
                    ? "border-[var(--main-color)] bg-white/[0.04] shadow-[0_0_15px_rgba(58,191,248,0.08)]" 
                    : "border-white/10 focus:border-[var(--main-color)]"
                }`}
                style={{
                  paddingTop: (focusedInput === "email" || formValues.email) ? "20px" : "16px",
                  paddingBottom: (focusedInput === "email" || formValues.email) ? "12px" : "16px",
                }}
              />
            </div>

            {/* Message Area */}
            <div className="relative w-full group">
              <MessageSquare className={`absolute left-4 top-[18px] transition-colors duration-300 ${
                focusedInput === "message" ? "text-[var(--main-color)]" : "text-[var(--text-subtle)]"
              }`} size={18} />
              
              <label
                className={`absolute left-12 transition-all duration-300 pointer-events-none font-medium ${
                  focusedInput === "message" || formValues.message
                    ? "top-1.5 text-[9px] text-[var(--main-color)] uppercase tracking-wider font-bold"
                    : "top-5 text-xs text-[var(--text-muted)]"
                }`}
              >
                Your Message
              </label>

              <textarea
                name="message"
                required
                rows={5}
                value={formValues.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                className={`w-full bg-white/[0.02] border rounded-2xl pl-12 pr-4 text-sm focus:outline-none transition-all placeholder-transparent resize-none ${
                  focusedInput === "message" 
                    ? "border-[var(--main-color)] bg-white/[0.04] shadow-[0_0_15px_rgba(58,191,248,0.08)]" 
                    : "border-white/10 focus:border-[var(--main-color)]"
                }`}
                style={{
                  paddingTop: (focusedInput === "message" || formValues.message) ? "24px" : "16px",
                  paddingBottom: "24px",
                }}
              />
              <span className={`absolute bottom-2.5 right-4 text-[9px] font-mono-custom tracking-wider ${
                formValues.message.length >= 500 ? "text-red-400" : "text-[var(--text-subtle)]"
              }`}>
                {formValues.message.length} / 500
              </span>
            </div>

            {/* Submit Button */}
            <button
              id="contact-submit"
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase overflow-hidden transition-all disabled:opacity-75 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, var(--main-color), var(--accent-color))",
                boxShadow: "0 4px 15px rgba(56,189,248,0.25)",
              }}
            >
              <span className="animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Dispatching...
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </span>
            </button>

            {/* Success & Failure Alert Feedback */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.15)] text-[#4ade80] text-xs font-semibold leading-relaxed"
                >
                  <CheckCircle size={16} className="shrink-0" />
                  <span>Message dispatched successfully! I&apos;ll get back to you shortly.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(248,113,113,0.06)] border border-[rgba(248,113,113,0.15)] text-[#f87171] text-xs font-semibold leading-relaxed"
                >
                  <XCircle size={16} className="shrink-0" />
                  <span>Submission issue. Please try again or email me directly at abhaydubey1177@gmail.com.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
