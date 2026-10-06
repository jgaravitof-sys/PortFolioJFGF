export const SECTION_IDS = ["hero", "about", "knowledge", "projects", "philosophy", "code", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];
export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "about", label: "ABOUT" }, { id: "knowledge", label: "KNOWLEDGE" },
  { id: "projects", label: "PROJECTS" }, { id: "contact", label: "CONTACT" },
];
