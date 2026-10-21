"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups } from "@/data/skills";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden" style={{ background: "#0c0c10" }} aria-label="Skills section">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(163,230,53,0.05) 0%, transparent 70%)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">02 / Skills</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">Technical </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #67e8f9, #c084fc)" }}>
              Arsenal
            </span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            Technologies, languages, and tools I actively study and use.
          </p>
        </motion.div>

        {/* Skill groups — periodic table style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="rounded-2xl p-5 relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${group.color}08 0%, #0c0c10 60%)`,
                border: `1px solid ${group.color}25`,
              }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${group.color}20 0%, transparent 70%)` }}
                aria-hidden="true" />

              {/* Group header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} aria-hidden="true" />
                <p className="text-xs font-mono tracking-[0.2em] uppercase font-bold" style={{ color: group.color }}>
                  {group.label}
                </p>
              </div>

              {/* Skill cells */}
              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ ...fadeUp, visible: { ...fadeUp.visible as object, transition: { duration: 0.4, delay: gi * 0.1 + si * 0.05 } } } as Variants}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="rounded-xl p-3 text-center cursor-default transition-all"
                    style={{
                      background: `${group.color}08`,
                      border: `1px solid ${group.color}20`,
                    }}
                  >
                    <p className="text-sm font-bold font-mono leading-none mb-1" style={{ color: group.color }}>
                      {skill.symbol}
                    </p>
                    <p className="text-[9px] font-mono text-zinc-500 tracking-wide truncate">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-zinc-700 text-xs font-mono mt-12 text-center tracking-wide"
        >
          No fabricated proficiency levels — skills reflect what I actively study and practice.
        </motion.p>
      </div>
    </section>
  );
}
