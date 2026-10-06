import { profile } from "@/data/profile";
import { VisitCounter } from "../VisitCounter";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 pb-28 pt-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold tracking-widest uppercase">{profile.name}</p>
          <p className="mt-1 text-sm text-mut">{profile.role}. {profile.location}.</p>
          {profile.openToWork && <p className="mt-3 flex items-center gap-2 font-mono text-[11px] tracking-widest"><span className="size-1.5 rounded-full bg-fg" />STATUS: OPEN TO OPPORTUNITIES</p>}
        </div>
        <nav aria-label="Enlaces" className="flex gap-6 font-mono text-xs tracking-widest">
          <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href={`mailto:${profile.email}`}>Email</a>
        </nav>
        <div className="flex flex-col gap-3 md:items-end">
          <VisitCounter />
          <p className="font-mono text-[11px] text-mut">2026 © {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
