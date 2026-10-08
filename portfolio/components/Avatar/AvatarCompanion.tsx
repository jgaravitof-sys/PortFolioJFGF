"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useMotionValueEvent, useSpring, useTransform, useVelocity } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { measureStops, targetAt, type Stop } from "./path";

const FLY = { stiffness: 90, damping: 20, mass: 1 }; // inercia suave: sensación de vuelo

/** Caballero que vuela por el carril libre guiando la lectura. Siempre de frente. */
export function AvatarCompanion() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const x = useSpring(0, FLY);
  const y = useSpring(0, FLY);
  const lean = useSpring(useTransform(useVelocity(x), [-1500, 1500], [-9, 9]), { stiffness: 120, damping: 18 });
  const stops = useRef<Stop[]>([]);
  const [size, setSize] = useState(0);

  const apply = useCallback((s: number, instant = false) => {
    const p = targetAt(stops.current, s);
    if (!p) return;
    if (instant) { x.jump(p.x); y.jump(p.y); } else { x.set(p.x); y.set(p.y); }
  }, [x, y]);

  useEffect(() => {
    let first = true;
    const measure = () => {
      const m = measureStops();
      stops.current = m.stops;
      setSize(m.size);
      apply(window.scrollY, first);
      first = false;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [apply]);

  useMotionValueEvent(scrollY, "change", (s) => apply(s));

  if (!size) return null;
  return (
    <motion.div aria-hidden className="pointer-events-none absolute left-0 top-0 z-30" style={{ x, y, width: size, height: size }}>
      <motion.div className="size-full" style={{ rotate: reduce ? 0 : lean }}>
        <div className={`relative size-full ${reduce ? "" : "avatar-float"}`}>
          <Image src="/avatar/knight-front.webp" alt="" fill sizes="128px" priority className="object-contain object-bottom" />
        </div>
      </motion.div>
    </motion.div>
  );
}
