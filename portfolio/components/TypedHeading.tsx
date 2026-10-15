"use client";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useMemo } from "react";

interface Props {
  text: string; // "\n" fuerza salto de línea
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  avatar?: "title" | "block";
}

const letter: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.1 } } };

/**
 * Título con escritura progresiva. El texto ocupa su espacio final desde el inicio (opacity, sin layout shift).
 * Accesibilidad: las letras van en aria-hidden y el encabezado expone el texto completo con aria-label.
 */
export function TypedHeading({ text, as: Tag = "h2", id, className, avatar }: Props) {
  const reduce = useReducedMotion();
  const total = text.replace(/\s/g, "").length;
  const container = useMemo<Variants>(
    () => ({ hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : Math.min(0.055, 1.2 / total) } } }),
    [reduce, total],
  );
  const letterVariants = useMemo<Variants>(
    () => (reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : letter),
    [reduce],
  );
  const lines = text.split("\n");
  return (
    <Tag id={id} data-avatar={avatar} className={className} aria-label={text.replace("\n", " ")}>
      <motion.span aria-hidden initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }} variants={container}>
        {lines.map((line, li) => (
          <span key={li}>
            {li > 0 && <br />}
            {line.split(" ").map((word, wi) => (
              <span key={wi}>
                {wi > 0 && " "}
                <span className="inline-block whitespace-nowrap">
                  {Array.from(word).map((ch, ci) => (
                    <motion.span key={ci} variants={letterVariants}>{ch}</motion.span>
                  ))}
                </span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
