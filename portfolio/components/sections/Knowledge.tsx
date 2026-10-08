import { Code2, Database, GitBranch, Layers, Server, Terminal, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const icons: Record<string, LucideIcon> = {
  languages: Code2, frameworks: Layers, databases: Database, development: Server, tools: Terminal, methodologies: GitBranch,
};

export function Knowledge() {
  return (
    <section id="knowledge" aria-labelledby="knowledge-title" className="section border-t border-line">
      <SectionHeading id="knowledge-title" index="02 / KNOWLEDGE" title="Technical index" />
      <div data-avatar="block" className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.id];
          return (
            <Reveal key={g.id} delay={i * 0.05} className="group bg-bg p-6 transition-colors hover:bg-card">
              <div className="flex items-center justify-between">
                <h3 className="eyebrow">{g.label.toUpperCase()}</h3>
                <Icon size={16} className="text-mut transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-fg" aria-hidden />
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="border border-line px-2.5 py-1 font-mono text-xs transition-colors hover:border-fg">{s}</li>)}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
