"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden" style={{ background: "#0c0c10" }} aria-label="Certifications section">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.06) 0%, transparent 70%)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">04 / Certifications</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">Credentials </span>
            <span className="text-zinc-600">&amp; </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #c084fc, #67e8f9)" }}>
              Learning
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl p-6 overflow-hidden group"
              style={{ background: "#131318", border: `1px solid ${cert.accent}20` }}
            >
              {/* Top gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
                aria-hidden="true" />

              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: `radial-gradient(circle, ${cert.accent}, transparent)` }}
                aria-hidden="true" />

              {/* Category */}
              <div className="mb-5">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full"
                  style={{ color: cert.accent, backgroundColor: `${cert.accent}12`, border: `1px solid ${cert.accent}25` }}>
                  {cert.category}
                </span>
              </div>

              {/* Icon block */}
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-lg font-black font-mono"
                style={{ backgroundColor: `${cert.accent}15`, color: cert.accent, border: `1px solid ${cert.accent}30` }}
                aria-hidden="true"
              >
                {cert.issuerShort[0]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-100 leading-tight mb-2">{cert.title}</h3>
              <p className="text-xs font-mono text-zinc-500 mb-6">{cert.issuerShort}</p>

              {/* Metadata */}
              <div className="space-y-2 border-t pt-5" style={{ borderColor: `${cert.accent}15` }}>
                <MetaRow label="DATE" value={cert.date} />
                {cert.dateRange && <MetaRow label="PERIOD" value={cert.dateRange} />}
                {cert.credits && <MetaRow label="CREDITS" value={cert.credits} accent={cert.accent} />}
                {cert.hours && <MetaRow label="HOURS" value={cert.hours} accent={cert.accent} />}
                <div className="pt-1">
                  <p className="text-[10px] font-mono text-zinc-700 tracking-widest mb-0.5">ISSUER</p>
                  <p className="text-xs text-zinc-400">{cert.issuer}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetaRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-mono text-zinc-700 tracking-widest">{label}</span>
      <span className="text-xs font-mono" style={{ color: accent ?? "#71717a" }}>{value}</span>
    </div>
  );
}
