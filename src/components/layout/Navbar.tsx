"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl border-b"
            : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "rgba(9,9,11,0.85)",
          borderColor: "rgba(163,230,53,0.1)",
        } : {}}
      >
        <nav
          className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href="#home"
            className="flex items-center gap-1 text-sm font-mono font-bold tracking-[0.2em] text-zinc-100 hover:text-lime-400 transition-colors"
            aria-label="Go to top"
          >
            PD
            <span className="text-lime-400 text-lg leading-none mb-0.5">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-[11px] font-mono tracking-[0.15em] uppercase text-zinc-500 hover:text-lime-400 transition-colors group focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-800 text-zinc-500 hover:border-lime-400/50 hover:text-lime-400 transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href="#contact"
              className="hidden md:flex items-center px-4 py-1.5 text-[11px] font-mono tracking-widest rounded-lg transition-all"
              style={{ background: "rgba(163,230,53,0.1)", color: "#a3e635", border: "1px solid rgba(163,230,53,0.25)" }}
            >
              HIRE ME
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:border-lime-400/50 hover:text-lime-400 transition-all"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} items={navItems} />
    </>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
