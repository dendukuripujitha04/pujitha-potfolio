"use client";

import { useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-zinc-950/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 bg-zinc-900 border-l border-zinc-800 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <span className="font-mono text-sm tracking-widest text-zinc-100">
            PD<span className="text-lime-400">.</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-zinc-400 hover:text-lime-400 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-3 px-2 text-sm font-mono tracking-widest uppercase text-zinc-400 hover:text-lime-400 border-b border-zinc-800/50 transition-colors focus-visible:outline-2 focus-visible:outline-lime-400"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
