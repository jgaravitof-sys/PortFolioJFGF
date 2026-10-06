import { ArrowDownRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-28 pt-28 md:px-8">
      <Reveal><p className="eyebrow">BASED IN {profile.location.toUpperCase()}</p></Reveal>
      <Reveal delay={0.08}>
        <h1 id="hero-title" className="mt-6 text-5xl font-semibold uppercase leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
          Juan Felipe<br />Garavito
        </h1>
      </Reveal>
      <Reveal delay={0.16}><p className="mt-6 font-mono text-sm tracking-widest text-mut">{profile.role.toUpperCase()}</p></Reveal>
      <Reveal delay={0.24}><p className="mt-6 max-w-xl text-lg leading-relaxed text-mut">{profile.intro}</p></Reveal>
      <Reveal delay={0.32} className="mt-10 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary"><ArrowDownRight size={16} aria-hidden />VIEW PROJECTS</a>
        <a href={`mailto:${profile.email}`} className="btn"><Mail size={16} aria-hidden />CONTACT ME</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn"><Github size={16} aria-hidden />GITHUB</a>
      </Reveal>
      <p className="mt-16 max-w-md font-mono text-xs tracking-wide text-mut">{profile.tagline}</p>
    </section>
  );
}
