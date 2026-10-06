"use client";
import { Eye } from "lucide-react";
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
  const [count, setCount] = useState<number | null | undefined>(undefined);
  useEffect(() => { load().then(setCount); }, []);
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-mut" aria-live="polite">
      <Eye size={14} aria-hidden /> VISITORS
      <span className="text-base text-fg" aria-label={count == null ? "No disponible" : undefined}>
        {count === undefined ? "…" : count === null ? "—" : count.toLocaleString("en-US")}
      </span>
    </div>
  );
}
