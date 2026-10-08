import { projects } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-t border-line">
      <SectionHeading id="projects-title" index="03 / PROJECTS" title="Selected work" />
      <div data-avatar="block" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06} className="flex"><div className="flex w-full"><ProjectCard project={p} /></div></Reveal>)}
      </div>
    </section>
  );
}
