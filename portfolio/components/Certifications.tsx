import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Reveal } from "./Reveal";
import { TypedHeading } from "./TypedHeading";

export function Certifications() {
  return (
    <div className="mt-20 md:mt-28">
      <Reveal>
        <p className="eyebrow">CERTIFICACIONES Y CURSOS</p>
      </Reveal>
      <TypedHeading as="h3" avatar="title" text="Certificaciones" className="mt-3 w-fit text-2xl font-semibold tracking-tight md:text-4xl" />
      <ul data-avatar="block" className="mt-8 grid gap-px border border-line bg-line lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.id} className="flex bg-bg">
            <Reveal delay={i * 0.08} className="group flex w-full flex-col p-6 transition-colors duration-300 hover:bg-card md:p-7">
              <div className="flex items-center justify-between text-mut">
                <BadgeCheck size={22} className="transition-all duration-300 group-hover:scale-110 group-hover:text-fg" aria-hidden />
                <span className="eyebrow">0{i + 1}</span>
              </div>
              <h4 className="mt-6 text-lg font-semibold leading-snug md:text-xl">{c.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mut">{c.issuer}{c.date ? ` · ${c.date}` : ""}</p>
              <div className="mt-auto pt-6">
                <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver certificado: ${c.name} (se abre en una pestaña nueva)`}
                  className="btn w-fit !min-h-9 !px-3 !py-1.5">
                  <ExternalLink size={14} aria-hidden />VER CERTIFICADO
                </a>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
