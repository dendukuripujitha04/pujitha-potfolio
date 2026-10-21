"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setFormState("error"); }
  }

  const links = [
    { label: "EMAIL", value: personalInfo.email, href: `mailto:${personalInfo.email}`, accent: "#a3e635", external: false },
    { label: "LINKEDIN", value: "pujitha-dendukuri", href: personalInfo.linkedin, accent: "#67e8f9", external: true },
    { label: "GITHUB", value: "dendukuripujitha04", href: personalInfo.github, accent: "#c084fc", external: true },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: "#0c0c10" }} aria-label="Contact section">
      {/* Bottom left glow */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">06 / Contact</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">Let&apos;s Build </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #a3e635, #34d399, #22d3ee)" }}>
              Something Together
            </span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            Open to internships, collaborations, and conversations about AI, software, and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {links.map((link) => (
              <a key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl p-5 transition-all group focus-visible:outline-2 focus-visible:outline-lime-400"
                style={{ background: "#131318", border: `1px solid ${link.accent}18` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black font-mono shrink-0 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${link.accent}15`, color: link.accent, border: `1px solid ${link.accent}30` }}
                  aria-hidden="true">
                  {link.label[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono tracking-widest mb-0.5" style={{ color: `${link.accent}80` }}>{link.label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors truncate font-mono">{link.value}</p>
                </div>
                <span className="text-zinc-700 group-hover:text-zinc-400 transition-all group-hover:translate-x-1">↗</span>
              </a>
            ))}

            {/* Tagline */}
            <div className="pt-6 pl-1">
              <p className="text-zinc-600 text-sm leading-relaxed">
                I respond promptly to all inquiries. Looking forward to connecting!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: "linear-gradient(135deg, #0d1f02, #0a1200)", border: "1px solid rgba(163,230,53,0.3)" }}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{ background: "rgba(163,230,53,0.15)", border: "1px solid rgba(163,230,53,0.3)" }}
                  aria-live="polite">✓</div>
                <p className="text-zinc-100 font-bold text-lg mb-1">Message sent!</p>
                <p className="text-zinc-500 text-sm">I&apos;ll get back to you soon.</p>
                <button onClick={() => setFormState("idle")}
                  className="mt-6 text-xs font-mono text-zinc-500 hover:text-lime-400 transition-colors">
                  ← Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form"
                className="rounded-2xl p-8 space-y-5"
                style={{ background: "#131318", border: "1px solid #1e1e24" }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-mono text-zinc-600 mb-2 tracking-widest">NAME</label>
                  <input id="contact-name" type="text" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 transition-all focus:outline-none"
                    style={{ background: "#1a1a22", border: `1px solid ${errors.name ? "#f87171" : "#27272a"}` }}
                    placeholder="Your full name" aria-required="true"
                    onFocus={e => e.target.style.borderColor = "#a3e635"}
                    onBlur={e => e.target.style.borderColor = errors.name ? "#f87171" : "#27272a"}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1.5" role="alert">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-mono text-zinc-600 mb-2 tracking-widest">EMAIL</label>
                  <input id="contact-email" type="email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 transition-all focus:outline-none"
                    style={{ background: "#1a1a22", border: `1px solid ${errors.email ? "#f87171" : "#27272a"}` }}
                    placeholder="your@email.com" aria-required="true"
                    onFocus={e => e.target.style.borderColor = "#a3e635"}
                    onBlur={e => e.target.style.borderColor = errors.email ? "#f87171" : "#27272a"}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1.5" role="alert">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono text-zinc-600 mb-2 tracking-widest">MESSAGE</label>
                  <textarea id="contact-message" rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 transition-all focus:outline-none resize-none"
                    style={{ background: "#1a1a22", border: `1px solid ${errors.message ? "#f87171" : "#27272a"}` }}
                    placeholder="Tell me about your project or opportunity..."
                    aria-required="true"
                    onFocus={e => e.target.style.borderColor = "#a3e635"}
                    onBlur={e => e.target.style.borderColor = errors.message ? "#f87171" : "#27272a"}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5" role="alert">{errors.message}</p>}
                </div>

                {formState === "error" && (
                  <p className="text-xs text-red-400" role="alert">
                    Something went wrong. Please email directly:{" "}
                    <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a>
                  </p>
                )}

                <button type="submit" disabled={formState === "sending"}
                  className="w-full py-4 text-sm font-mono tracking-widest text-zinc-950 rounded-xl transition-all disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-lime-400"
                  style={{ background: formState === "sending" ? "#6b7280" : "linear-gradient(135deg, #a3e635, #34d399)" }}
                >
                  {formState === "sending" ? "SENDING..." : "SEND MESSAGE →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
