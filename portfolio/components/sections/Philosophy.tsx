import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
// Principios derivados de las competencias del CV.
const principles = [
  { t: "Structure first", d: "Arquitecturas MVC y patrones de diseño para que el código crezca sin romperse." },
  { t: "Data done right", d: "Bases de datos relacionales normalizadas y consultas optimizadas." },
  { t: "Secure by default", d: "APIs RESTful con autenticación JWT, roles y manejo de sesiones." },
  { t: "Ship together", d: "Git/GitHub, Scrum y Kanban para trabajar en equipo con ritmo." },
];
export function Philosophy() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="section border-t border-line">
      <SectionHeading id="philosophy-title" index="04 / HOW I BUILD" title="Engineering philosophy" />
      <ol data-avatar="block" className="grid gap-8 sm:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.06}>
            <li className="border-t border-fg pt-4">
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
              <p className="justify-body mt-2 text-sm leading-relaxed text-mut">{p.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
