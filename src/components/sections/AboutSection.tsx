"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo, education, interests } from "@/data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{ background: "#0a0a0d" }} aria-label="About section">
      {/* Side accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: "linear-gradient(to bottom, transparent, #a3e635, #67e8f9, transparent)" }}
        aria-hidden="true" />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(163,230,53,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(103,232,249,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger} className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">01 / About</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">The Mind </span>
            <span className="text-zinc-600">Behind</span>
            <br />
            <span className="text-zinc-600">the </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #a3e635, #34d399)" }}>
              Machine
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Bio — wider column */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-3 space-y-8"
          >
            <motion.p variants={fadeUp} className="text-zinc-300 text-xl leading-[1.75] font-light">
              {personalInfo.objective}
            </motion.p>

            <motion.div variants={fadeUp} className="pl-4 border-l-2 border-lime-400/40">
              <p className="text-zinc-400 text-sm leading-relaxed">
                Currently pursuing a{" "}
                <span className="text-zinc-200 font-medium">{education.degree}</span> at{" "}
                <span className="text-lime-400 font-semibold">{education.institution}</span>,
                expected to graduate in <span className="text-zinc-200">{education.graduation}</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest}
                    className="px-3 py-1.5 text-xs font-mono tracking-wide text-zinc-400 border border-zinc-800 rounded-lg hover:border-lime-400/50 hover:text-lime-400 hover:bg-lime-400/5 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats — narrow column */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-2 space-y-4"
          >
            {/* CGPA spotlight */}
            <motion.div variants={fadeUp}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0d1f02 0%, #0a1200 100%)", border: "1px solid rgba(163,230,53,0.2)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(163,230,53,0.15) 0%, transparent 70%)" }}
                aria-hidden="true" />
              <p className="text-xs font-mono text-lime-400/70 tracking-widest mb-1">ACADEMIC PERFORMANCE</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-6xl font-bold text-lime-400 leading-none">{education.cgpa}</span>
                <span className="text-lg text-zinc-500 mb-1">/ 10</span>
              </div>
              <p className="text-zinc-300 font-semibold text-sm">{education.degree}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{education.institution}</p>
              <div className="flex gap-6 mt-4 pt-4 border-t border-zinc-800">
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 tracking-widest">YEAR</p>
                  <p className="text-sm text-zinc-300 mt-0.5">{education.year}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 tracking-widest">GRAD</p>
                  <p className="text-sm text-zinc-300 mt-0.5">{education.graduation}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 tracking-widest">STATUS</p>
                  <p className="text-sm text-lime-400 mt-0.5 font-mono">Active</p>
                </div>
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div variants={fadeUp}
              className="rounded-2xl p-6"
              style={{ background: "#111115", border: "1px solid #1e1e24" }}
            >
              <p className="text-xs font-mono text-cyan-400 tracking-widest mb-4">ACTIVITIES</p>
              <ul className="space-y-3">
                {[
                  "Hackathon preparation: AI, web dev & innovative tech",
                  "Team-based projects: AI, IoT, healthcare & smart agriculture",
                  "Building practical apps with modern AI tools",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-lime-400 shrink-0 mt-0.5 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
