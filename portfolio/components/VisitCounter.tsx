"use client";
import { Eye } from "lucide-react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "jfg_last_visit";
const WINDOW_MS = 6 * 60 * 60 * 1000; // una visita cada 6 h por navegador

async function load(): Promise<number | null> {
  try {
    let counted = false;
    try { counted = Date.now() - Number(localStorage.getItem(KEY) ?? 0) < WINDOW_MS; } catch {}
    const res = await fetch("/api/visits", { method: counted ? "GET" : "POST" });
    const { count } = (await res.json()) as { count: number | null };
    if (!counted && count !== null) { try { localStorage.setItem(KEY, String(Date.now())); } catch {} }
    return count;
  } catch { return null; }
}

export function VisitCounter() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState<number | null | undefined>(undefined);
  const value = useMotionValue(0);
  const shown = useTransform(value, (v) => Math.round(v).toLocaleString("en-US"));

  useEffect(() => { load().then(setCount); }, []);
  useEffect(() => {
    if (typeof count !== "number") return;
    if (reduce) { value.set(count); return; }
    const controls = animate(value, count, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [count, reduce, value]);

  return (
    <div className="inline-flex w-fit items-stretch border border-line font-mono">
      <span className="flex items-center gap-2 px-3 py-2 text-[11px] tracking-[.2em] text-mut sm:px-4">
        <Eye size={14} aria-hidden /> VISITORS
      </span>
      <span className="flex min-w-[4.5rem] items-center justify-center border-l border-line bg-card px-3 py-2 text-base font-semibold tabular-nums text-fg sm:px-4">
        {typeof count === "number" ? (
          <>
            <span className="sr-only">Visitantes: {count.toLocaleString("en-US")}</span>
            <motion.span aria-hidden>{shown}</motion.span>
          </>
        ) : (
          <span aria-label={count === undefined ? "Cargando" : "No disponible"}>{count === undefined ? "…" : "—"}</span>
        )}
      </span>
    </div>
  );
}
