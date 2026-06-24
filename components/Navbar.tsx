"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50"
    >
      <nav className="section-shell glass flex h-16 items-center justify-between rounded-lg px-4 sm:px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-wide">
          <span className="text-cyanGlow">Aritra</span>
          <span className="text-white">.dev</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyanGlow">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            aria-label="Email Aritra"
            href="mailto:aritram063@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-lg border border-cyanGlow/20 bg-cyanGlow/10 text-cyanGlow transition hover:border-cyanGlow/60"
          >
            <Mail size={18} />
          </a>
          <a
            aria-label="GitHub profile"
            href="https://github.com/ARITRA740"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-violetGlow/70 hover:text-violetGlow"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
