import { Reveal } from "./Reveal";
export function SectionHeading({ id, index, title }: { id: string; index: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow">{index}</p>
      <h2 id={id} data-avatar="title" className="mt-3 w-fit text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}
