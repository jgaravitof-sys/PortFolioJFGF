import { Reveal } from "./Reveal";
export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow">{index}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}
