import { Reveal } from "./Reveal";
import { TypedHeading } from "./TypedHeading";
export function SectionHeading({ id, index, title }: { id: string; index: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow">{index}</p>
      <TypedHeading as="h2" id={id} avatar="title" text={title} className="mt-3 w-fit text-3xl font-semibold tracking-tight md:text-5xl" />
    </Reveal>
  );
}
