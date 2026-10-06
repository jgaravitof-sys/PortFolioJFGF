"use client";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, type SectionId } from "@/lib/sections";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ active }: { active: SectionId }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="font-mono text-xs font-semibold tracking-widest uppercase">{profile.name}</a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined}
                className={`group relative block font-mono text-xs tracking-widest transition duration-200 hover:translate-x-0.5 hover:text-fg ${active === l.id ? "text-fg" : "text-mut"}`}>
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-fg transition-all duration-300 ${active === l.id ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menú"
            className="grid size-11 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-fg">
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="border-t border-line bg-bg px-5 pb-4 md:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-mono text-sm tracking-widest">{l.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
