"use client";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { SectionId } from "@/lib/sections";
import { Avatar } from "./Avatar";
import type { AvatarState } from "./types";

const SECTION_STATE: Record<SectionId, AvatarState> = {
  hero: "idle", about: "idle", knowledge: "sitting", projects: "pointing", philosophy: "idle", code: "idle", contact: "celebrating",
};

/** Acompaña el scroll: zigzag horizontal en desktop, fijo y compacto en móvil. */
export function AvatarCompanion({ section }: { section: SectionId }) {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const left = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], ["84vw", "6vw", "84vw", "6vw", "78vw"]);
  const [scrolling, setScrolling] = useState(false);
  const [hover, setHover] = useState(false);
  const [wide, setWide] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const lookX = useMotionValue(0);
  const lookY = useMotionValue(0);

  useMotionValueEvent(scrollY, "change", () => {
    setScrolling(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setScrolling(false), 180);
  });
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync(); mq.addEventListener("change", sync);
    const move = (e: PointerEvent) => {
      lookX.set((e.clientX / window.innerWidth) * 2 - 1);
      lookY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { mq.removeEventListener("change", sync); window.removeEventListener("pointermove", move); };
  }, [lookX, lookY]);

  const state: AvatarState = hover ? "celebrating" : scrolling ? "walking" : SECTION_STATE[section];
  return (
    <motion.div className="pointer-events-none fixed bottom-4 z-30 size-14 md:size-20"
      style={wide ? { left } : { right: 12 }}>
      <div className="pointer-events-auto size-full" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
        <Avatar state={state} lookX={lookX} lookY={lookY} />
      </div>
    </motion.div>
  );
}
