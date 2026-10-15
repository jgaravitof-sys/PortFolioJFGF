import { ArrowRight, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "../Reveal";
import { TypedHeading } from "../TypedHeading";

export function Contact() {
  const links = [
    { icon: Mail, label: "EMAIL", text: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LINKEDIN", text: "juan-felipe-garavito-18664834a", href: profile.linkedin },
    { icon: Github, label: "GITHUB", text: "jgaravitof-sys", href: profile.github },
    { icon: Instagram, label: "INSTAGRAM", text: "@juanfelipe.garavito", href: profile.instagram },
    { icon: Phone, label: "PHONE", text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
      <Reveal>
        <p className="eyebrow">06 / CONTACT</p>
        <TypedHeading as="h2" id="contact-title" avatar="title" text={"Let's build\nsomething"} className="mt-3 w-fit text-3xl sm:text-5xl font-semibold uppercase tracking-tight md:text-7xl" />
        <p className="justify-body mt-6 max-w-xl text-lg leading-relaxed text-mut">Si buscas un desarrollador junior con interés en backend, desarrollo web y aprendizaje continuo, me gustaría conversar.</p>
        <a href={`mailto:${profile.email}`} data-avatar="title" className="btn btn-primary mt-8">GET IN TOUCH <ArrowRight size={16} aria-hidden /></a>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {links.map(({ icon: Icon, label, text, href }, i) => (
            <li key={label} className={`bg-bg ${links.length % 2 === 1 && i === links.length - 1 ? "sm:col-span-2" : ""}`}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 p-5 transition-colors hover:bg-card">
                <Icon size={18} className="text-mut transition-colors group-hover:text-fg" aria-hidden />
                <span><span className="eyebrow block">{label}</span><span className="link text-sm">{text}</span></span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
