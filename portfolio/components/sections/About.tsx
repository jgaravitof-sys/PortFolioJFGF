import { profile } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Certifications } from "../Certifications";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-line">
      <SectionHeading id="about-title" index="01 / ABOUT ME" title="Quién soy" />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal avatar="block" className="md:col-span-3">
          <p className="justify-body text-xl leading-relaxed md:text-2xl">{profile.about}</p>
          <p className="mt-6 font-mono text-xs leading-relaxed tracking-wide text-mut">{profile.education}</p>
        </Reveal>
        <Reveal delay={0.1} avatar="block" className="md:col-span-2">
          <dl className="grid grid-cols-2 gap-px border border-line bg-line">
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-bg p-5">
                <dt className="eyebrow">{s.label.toUpperCase()}</dt>
                <dd className="mt-2 text-xl font-semibold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
          <h3 className="eyebrow mt-8">IDIOMAS</h3>
          <p className="mt-3 text-sm text-mut">{profile.languages.join(" · ")}</p>
        </Reveal>
      </div>
      <Certifications />
    </section>
  );
}
