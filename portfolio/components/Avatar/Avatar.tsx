"use client";
import { motion, useReducedMotion, type MotionValue, useTransform } from "motion/react";
import type { AvatarState } from "./types";

const loop = (d: number) => ({ repeat: Infinity, duration: d, ease: "easeInOut" as const });
const bodyAnim: Record<AvatarState, { y?: number | number[]; rotate?: number[]; transition?: object }> = {
  idle: { y: [0, -2, 0], transition: loop(2.4) },
  walking: { y: [0, -4, 0], rotate: [-2, 2, -2], transition: loop(0.5) },
  jumping: { y: [0, -16, 0], transition: loop(0.8) },
  sitting: { y: 12, transition: { duration: 0.4 } },
  pointing: { y: [0, -1, 0], transition: loop(2) },
  celebrating: { y: [0, -12, 0], rotate: [-4, 4, -4], transition: loop(0.6) },
};
const still = { transformBox: "fill-box" as const, transformOrigin: "center" as const };

interface Props { state: AvatarState; lookX: MotionValue<number>; lookY: MotionValue<number>; }

/** Personaje geométrico. Solo anima transform/opacity. Añadir poses = añadir una entrada en bodyAnim. */
export function Avatar({ state, lookX, lookY }: Props) {
  const reduce = useReducedMotion();
  const ex = useTransform(lookX, (v) => v * 2.5);
  const ey = useTransform(lookY, (v) => v * 2);
  const anim = reduce ? { y: state === "sitting" ? 12 : 0 } : bodyAnim[state];
  const armUp = state === "pointing" || state === "celebrating";
  const stroke = { stroke: "var(--fg)", strokeWidth: 2, strokeLinecap: "round" as const, fill: "none" };
  return (
    <svg viewBox="0 0 64 72" role="img" aria-label="Avatar de Juan Felipe" className="size-full overflow-visible">
      <motion.g animate={anim} style={still}>
        <rect x="16" y="6" width="32" height="26" rx="4" fill="var(--bg)" stroke="var(--fg)" strokeWidth="2" />
        <circle cx="26" cy="19" r="4" fill="var(--bg)" stroke="var(--fg)" strokeWidth="1.5" />
        <circle cx="38" cy="19" r="4" fill="var(--bg)" stroke="var(--fg)" strokeWidth="1.5" />
        <motion.circle cx="26" cy="19" r="1.8" fill="var(--fg)" style={{ x: ex, y: ey }} />
        <motion.circle cx="38" cy="19" r="1.8" fill="var(--fg)" style={{ x: ex, y: ey }} />
        <path d="M27 26h10" {...stroke} strokeWidth={1.5} />
        <rect x="20" y="35" width="24" height="18" rx="3" fill="var(--bg)" stroke="var(--fg)" strokeWidth="2" />
        <path d="M27 42l-3 3 3 3M37 42l3 3-3 3" {...stroke} strokeWidth={1.5} />
        <path d="M20 40l-6 8" {...stroke} />
        <motion.path d="M44 40l6 8" {...stroke} animate={{ rotate: armUp ? -120 : 0 }} style={{ ...still, transformOrigin: "0% 0%" }} />
        {state !== "sitting" && <path d="M27 53v10M37 53v10" {...stroke} />}
        {state === "sitting" && <path d="M27 53l-6 6M37 53l6 6" {...stroke} />}
      </motion.g>
    </svg>
  );
}
