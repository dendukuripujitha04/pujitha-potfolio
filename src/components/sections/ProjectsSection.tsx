"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects, type Project } from "@/data/projects";

const statusStyle: Record<string, { color: string; bg: string; label: string }> = {
  "In Development": { color: "#fb923c", bg: "rgba(251,146,60,0.1)", label: "IN DEVELOPMENT" },
  Completed:        { color: "#a3e635", bg: "rgba(163,230,53,0.1)", label: "COMPLETED" },
  Concept:          { color: "#c084fc", bg: "rgba(192,132,252,0.1)", label: "CONCEPT" },
};

function AgricultureVisual() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="agri-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#0a1a00" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#agri-bg)" />
      {/* Terrain waves */}
      {[0,1,2,3,4].map(i => (
        <path key={i}
          d={`M-10,${140+i*18} Q100,${118+i*18} 200,${138+i*18} T410,${138+i*18}`}
          fill="none" stroke="#84cc16" strokeWidth="1" opacity={0.35-i*0.05}
        />
      ))}
      {/* Grid dots */}
      {[60,120,180,240,300,360].map(x =>
        [40,80,120].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#84cc16" opacity="0.5" />
        ))
      )}
      {/* Data line */}
      <polyline points="60,120 120,80 180,100 240,65 300,85 360,60"
        fill="none" stroke="#84cc16" strokeWidth="1.5" opacity="0.7" />
      {/* Active sensor */}
      <circle cx="360" cy="60" r="6" fill="none" stroke="#84cc16" strokeWidth="1.5" opacity="0.9" />
      <circle cx="360" cy="60" r="3" fill="#84cc16" opacity="0.9" />
      {/* Label */}
      <text x="20" y="22" fill="#84cc16" opacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="3">SMART AGRICULTURE · AI MONITORING</text>
    </svg>
  );
}

function HealthcareVisual() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="health-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#001f2d" />
          <stop offset="100%" stopColor="#00111a" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#health-bg)" />
      {/* ECG line */}
      <polyline
        points="0,110 60,110 85,55 105,160 125,75 145,110 200,110 400,110"
        fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.8"
      />
      {/* Glow */}
      <polyline
        points="0,110 60,110 85,55 105,160 125,75 145,110 200,110 400,110"
        fill="none" stroke="#22d3ee" strokeWidth="6" opacity="0.1"
      />
      {/* Pulse dot */}
      <circle cx="200" cy="110" r="5" fill="#22d3ee" opacity="0.9" />
      {/* Concentric rings */}
      {[15,28,42].map(r => (
        <circle key={r} cx="320" cy="80" r={r} fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity={0.5-r*0.008} />
      ))}
      <circle cx="320" cy="80" r="5" fill="#22d3ee" opacity="0.9" />
      {/* Cross icon */}
      <rect x="56" y="30" width="5" height="20" rx="2" fill="#22d3ee" opacity="0.6" />
      <rect x="49" y="37" width="19" height="5" rx="2" fill="#22d3ee" opacity="0.6" />
      <text x="20" y="22" fill="#22d3ee" opacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="3">HEALTHCARE AI · VOICE ASSISTANT</text>
    </svg>
  );
}

function ChatbotVisual() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="chat-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#160d28" />
          <stop offset="100%" stopColor="#0d0718" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#chat-bg)" />
      {/* Bot bubble */}
      <rect x="20" y="30" width="185" height="44" rx="22" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.7" />
      <text x="112" y="57" textAnchor="middle" fontSize="11" fill="#a78bfa" opacity="0.85" fontFamily="monospace">Hello, how can I help?</text>
      {/* User bubble */}
      <rect x="140" y="90" width="220" height="44" rx="22" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <text x="250" y="117" textAnchor="middle" fontSize="11" fill="#a78bfa" opacity="0.75" fontFamily="monospace">Tell me about Python</text>
      {/* Typing indicator */}
      <rect x="20" y="150" width="110" height="40" rx="20" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.4" />
      <circle cx="55" cy="170" r="4" fill="#a78bfa" opacity="0.6" />
      <circle cx="75" cy="170" r="4" fill="#a78bfa" opacity="0.6" />
      <circle cx="95" cy="170" r="4" fill="#a78bfa" opacity="0.6" />
      <text x="20" y="22" fill="#a78bfa" opacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="3">NLP CHATBOT · RULE-BASED AI</text>
    </svg>
  );
}

const visualMap = { agriculture: AgricultureVisual, healthcare: HealthcareVisual, chatbot: ChatbotVisual };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Visual = visualMap[project.motif];
  const status = statusStyle[project.status];

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{ background: "#111115", border: `1px solid ${project.accent}20` }}
    >
      {/* Visual header */}
      <div className="relative h-52 overflow-hidden">
        <Visual />
        {/* Overlay gradient */}
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 50%, #111115 100%)` }} />

        {/* Status badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ background: status.bg, border: `1px solid ${status.color}40` }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: status.color }} aria-hidden="true" />
          <span className="text-[9px] font-mono tracking-widest" style={{ color: status.color }}>{status.label}</span>
        </div>

        {/* Category */}
        <div className="absolute top-4 right-4">
          <span className="text-[9px] font-mono text-zinc-500 tracking-wide">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono mb-3" style={{ color: project.accent }}>{project.subtitle}</p>
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map(tech => (
            <span key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700/60 text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions bar */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-mono tracking-widest transition-colors"
            style={{ color: project.accent }}
            aria-expanded={expanded}
          >
            {expanded ? "↑ LESS" : "↓ DETAILS"}
          </button>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label={`GitHub for ${project.title}`}
            >↗ GitHub</a>
          ) : (
            <span className="text-[10px] font-mono text-zinc-700 tracking-wide">PRIVATE REPO</span>
          )}
        </div>

        {/* Expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-zinc-400 leading-relaxed pt-4 mt-4 border-t border-zinc-800">
                {project.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden" style={{ background: "#09090b" }} aria-label="Projects section">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(163,230,53,0.04) 0%, transparent 60%)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-lime-400 tracking-[0.3em] uppercase">03 / Projects</span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
            <span className="text-zinc-100">Technical </span>
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #a3e635, #22d3ee)" }}>
              Explorations
            </span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-lg">
            Projects at the intersection of AI, software development, and real-world problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
