"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectThumb } from "./ProjectThumb";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
      className="group relative flex flex-col border border-line bg-card transition-colors hover:border-fg focus-within:border-fg">
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-bg p-2 transition-transform duration-500 [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:scale-105">
        <ProjectThumb kind={p.kind} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-mut">
          <span>PROJECT {String(p.id).padStart(2, "0")}</span><span>{p.type.toUpperCase()}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">{p.title}</Link>
        </h3>
        <p className="justify-body text-sm leading-relaxed text-mut">{p.description}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {p.technologies.map((t) => <li key={t} className="border border-line px-2 py-0.5 font-mono text-[11px] text-mut">{t}</li>)}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-2 font-mono text-[11px] tracking-widest">
          <span className="flex items-center gap-2"><span className={`size-1.5 rounded-full ${p.status === "IN DEVELOPMENT" ? "bg-mut" : "bg-fg"}`} />{p.status}</span>
          <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            VIEW PROJECT <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </span>
        </div>
        <div className="relative z-10 flex gap-2">
          {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn !min-h-9 !px-3 !py-1.5"><Github size={14} aria-hidden />VIEW SOURCE</a>}
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-9 !px-3 !py-1.5"><ExternalLink size={14} aria-hidden />LIVE DEMO</a>}
        </div>
      </div>
    </motion.article>
  );
}
