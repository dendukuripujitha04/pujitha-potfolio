"use client";

import { motion } from "framer-motion";
import { education, strengths } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-32 relative overflow-hidden" style={{ background: "#09090b" }} aria-label="Education and Strengths">
      {/* Side glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">05 / Education &amp; Strengths</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">Foundation </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #a3e635, #67e8f9)" }}>
              &amp; Capabilities
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <p className="text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase mb-8">Academic Timeline</p>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #a3e635, rgba(163,230,53,0.1), transparent)" }}
                aria-hidden="true" />

              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[33px] top-4 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "#09090b", border: "2px solid #a3e635" }}
                  aria-hidden="true">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                </div>

                <div className="rounded-2xl p-7 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0d1f02 0%, #0c0c10 100%)", border: "1px solid rgba(163,230,53,0.2)" }}>
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(163,230,53,0.1) 0%, transparent 70%)" }}
                    aria-hidden="true" />

                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="text-xs font-mono text-lime-400/70 tracking-widest mb-1">B.TECH DEGREE</p>
                      <h3 className="text-zinc-100 font-bold text-lg leading-snug">{education.degree}</h3>
                      <p className="text-lime-400 text-sm font-mono mt-1">{education.institution}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-4xl font-black text-lime-400">{education.cgpa}</p>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest">CGPA</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t pt-5" style={{ borderColor: "rgba(163,230,53,0.1)" }}>
                    {[
                      { label: "YEAR", value: education.year },
                      { label: "GRADUATING", value: education.graduation },
                      { label: "STATUS", value: "Active", highlight: true },
                    ].map(item => (
                      <div key={item.label}>
                        <p className="text-[10px] font-mono text-zinc-600 tracking-widest">{item.label}</p>
                        <p className={`text-sm mt-0.5 font-mono ${item.highlight ? "text-lime-400" : "text-zinc-300"}`}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Strengths */}
          <div>
            <p className="text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase mb-8">Core Strengths</p>
            <div className="space-y-2.5">
              {strengths.map((strength, i) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-center gap-5 rounded-xl p-4 transition-all cursor-default"
                  style={{ background: "#111115", border: "1px solid #1e1e24" }}
                  whileHover={{ borderColor: "rgba(163,230,53,0.25)", x: 4 }}
                >
                  <span className="text-3xl font-black font-mono text-zinc-800 group-hover:text-lime-400/40 transition-colors w-10 text-right shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800 group-hover:bg-lime-400/20 transition-colors" aria-hidden="true" />
                  <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-100 transition-colors tracking-wide">
                    {strength}
                  </span>
                  <span className="text-zinc-700 group-hover:text-lime-400 transition-colors text-xs">→</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
