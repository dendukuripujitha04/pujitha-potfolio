"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#09090b", borderTop: "1px solid #1a1a1d" }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #a3e635, transparent)" }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <div>
            <p className="font-mono text-sm font-bold tracking-[0.2em] text-zinc-100">
              PD<span className="text-lime-400">.</span>
            </p>
            <p className="text-xs text-zinc-600 font-mono mt-0.5">Pujitha Dendukuri · 2026</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: personalInfo.github, external: true },
              { label: "LinkedIn", href: personalInfo.linkedin, external: true },
              { label: "Email", href: `mailto:${personalInfo.email}`, external: false },
            ].map(link => (
              <a key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-xs font-mono text-zinc-600 hover:text-lime-400 transition-colors tracking-widest"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Tech badge */}
          <p className="text-xs font-mono text-zinc-700 tracking-wide">
            Built with <span className="text-zinc-500">Next.js</span> · <span className="text-zinc-500">Three.js</span> · <span className="text-zinc-500">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
