import { ArrowUpRight, GitBranch, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function CodeSection() {
  const repos = projects.filter((p) => p.githubUrl);
  return (
    <section id="code" aria-labelledby="code-title" className="section border-t border-line">
      <SectionHeading id="code-title" index="05 / MY CODE" title="Building in public" />
      <Reveal avatar="block" className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="justify-body text-lg leading-relaxed text-mut">Mi código vive en GitHub. Ahí puedes revisar cómo estructuro, nombro y versiono cada proyecto.</p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6"><Github size={16} aria-hidden />github.com/jgaravitof-sys<ArrowUpRight size={16} aria-hidden /></a>
        </div>
        <ul className="divide-y divide-line border border-line">
          {repos.map((p) => (
            <li key={p.slug}>
              <a href={p.githubUrl!} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 px-4 py-3 font-mono text-xs transition-colors hover:bg-card">
                <span className="flex items-center gap-2"><GitBranch size={14} aria-hidden />{p.githubUrl!.split("/").pop()}</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
