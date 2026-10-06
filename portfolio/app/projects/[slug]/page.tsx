import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectThumb } from "@/components/ProjectThumb";

const TBD = "Pendiente de documentar.";
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return p ? { title: p.title, description: p.description } : {};
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-line py-8"><h2 className="eyebrow">{title}</h2><div className="mt-3 text-mut leading-relaxed">{children}</div></section>;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
      <Link href="/#projects" className="btn mb-10"><ArrowLeft size={14} aria-hidden />BACK</Link>
      <p className="eyebrow">PROJECT {String(p.id).padStart(2, "0")} · {p.type.toUpperCase()}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
      <div className="my-8 aspect-[16/9] overflow-hidden border border-line p-2"><ProjectThumb kind={p.kind} /></div>
      <Block title="OVERVIEW"><p>{p.description}</p></Block>
      <Block title="PROBLEM"><p>{TBD}</p></Block>
      <Block title="SOLUTION"><p>{TBD}</p></Block>
      <Block title="TECHNOLOGIES"><ul className="flex flex-wrap gap-2">{p.technologies.map((t) => <li key={t} className="border border-line px-2 py-1 font-mono text-xs">{t}</li>)}</ul></Block>
      <Block title="ARCHITECTURE"><p>{p.architecture ?? TBD}</p></Block>
      <Block title="KEY FEATURES"><ul className="list-disc space-y-1 pl-5">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
      <Block title="CHALLENGES"><p>{TBD}</p></Block>
      <Block title="WHAT I LEARNED"><p>{TBD}</p></Block>
      <Block title="STATUS"><p className="font-mono text-xs tracking-widest text-fg">{p.status}</p></Block>
      <Block title="SOURCE CODE / LIVE DEMO">
        <div className="flex flex-wrap gap-3">
          {p.githubUrl ? <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn"><Github size={14} aria-hidden />VIEW SOURCE</a> : <span className="font-mono text-xs">Repositorio: pendiente</span>}
          {p.liveUrl ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><ExternalLink size={14} aria-hidden />LIVE DEMO</a> : <span className="font-mono text-xs">Demo: no desplegada</span>}
        </div>
      </Block>
    </main>
  );
}
