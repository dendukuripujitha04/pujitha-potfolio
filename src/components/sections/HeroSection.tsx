"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const IntelligenceCore = dynamic(
  () => import("@/components/three/IntelligenceCore"),
  { ssr: false, loading: () => <SceneFallback /> }
);

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
      <div className="relative w-56 h-56">
        <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-3xl animate-pulse" />
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="cg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a3e635" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#cg)" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#a3e635" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#67e8f9" strokeWidth="0.5" opacity="0.4" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#c084fc" strokeWidth="0.8" opacity="0.5" />
          <circle cx="100" cy="100" r="8" fill="#a3e635" opacity="0.9" />
          <circle cx="100" cy="40" r="3" fill="#a3e635" />
          <circle cx="155" cy="75" r="2.5" fill="#67e8f9" />
          <circle cx="155" cy="125" r="2" fill="#c084fc" />
          <circle cx="100" cy="160" r="3" fill="#a3e635" />
          <circle cx="45" cy="125" r="2.5" fill="#67e8f9" />
          <circle cx="45" cy="75" r="2" fill="#c084fc" />
        </svg>
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, #0a1a00 0%, #09090b 60%)" }}
      aria-label="Hero section"
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(163,230,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(103,232,249,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 w-full grid md:grid-cols-2 gap-8 items-center relative z-10">

        {/* ── Left ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Meta chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {personalInfo.editorialMeta.map((label) => (
              <span key={label}
                className="px-2.5 py-0.5 text-[10px] font-mono tracking-[0.2em] text-lime-400 border border-lime-400/40 bg-lime-400/8 rounded-sm backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <p className="font-mono text-xs tracking-[0.35em] text-zinc-500 mb-3 uppercase">Hello, I&apos;m</p>
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold text-zinc-50 leading-[0.9] tracking-tight">
              Pujitha
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #a3e635 0%, #34d399 40%, #22d3ee 100%)" }}
              >
                Dendukuri
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-snug">
              {personalInfo.headline}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-sm text-zinc-500 max-w-sm leading-relaxed">
            {personalInfo.tagline}
          </motion.p>

          {/* Availability */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/25 bg-lime-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest">{personalInfo.availability}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
            <a href="#projects" id="cta-explore"
              className="group relative px-7 py-3.5 text-sm font-mono tracking-widest text-zinc-950 rounded-lg overflow-hidden transition-all focus-visible:outline-2 focus-visible:outline-lime-400"
              style={{ background: "linear-gradient(135deg, #a3e635, #34d399)" }}
            >
              <span className="relative z-10">EXPLORE MY WORK</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg, #bef264, #6ee7b7)" }} />
            </a>
            <a href="#contact" id="cta-contact"
              className="px-7 py-3.5 text-sm font-mono tracking-widest border border-zinc-700 text-zinc-300 rounded-lg hover:border-lime-400/60 hover:text-lime-400 hover:bg-lime-400/5 transition-all focus-visible:outline-2 focus-visible:outline-lime-400"
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-1">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-lime-400 transition-colors tracking-widest"
              aria-label="GitHub profile"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors tracking-widest"
              aria-label="LinkedIn profile"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right — 3D Canvas ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="w-full h-[460px] md:h-[560px] relative"
          aria-hidden="true"
        >
          {/* Glow behind canvas */}
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.15) 0%, transparent 65%)", filter: "blur(30px)" }} />
          <Suspense fallback={<SceneFallback />}>
            <IntelligenceCore />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono text-zinc-600 tracking-[0.35em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
