"use client";
import { AvatarCompanion } from "./Avatar/AvatarCompanion";
import { Nav } from "./Nav";
import { ScrollProgress } from "./ScrollProgress";
import { SECTION_IDS, type SectionId } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export function SiteShell({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  const active = useActiveSection(SECTION_IDS) as SectionId;
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">Saltar al contenido</a>
      <ScrollProgress />
      <Nav active={active} />
      <AvatarCompanion section={active} />
      <main>{children}</main>
      {footer}
    </>
  );
}
