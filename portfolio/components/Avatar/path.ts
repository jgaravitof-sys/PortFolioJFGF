export interface Stop { x: number; y: number; trigger: number }
export interface Measured { stops: Stop[]; size: number }

const MAX_W = 1152; // max-w-6xl
const HOLD = 90;    // px de scroll que el avatar reposa sobre cada ancla
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const smooth = (t: number) => { const c = clamp01(t); return c * c * (3 - 2 * c); };

/** Carril libre a la derecha del contenido (debe coincidir con --lane en globals.css). */
export function laneFor(vw: number) {
  const lane = vw >= 1024 ? 144 : vw >= 768 ? 128 : 72;
  return { lane, size: lane - 16 };
}

/**
 * Lee los [data-avatar] y calcula dónde vuela el avatar en coordenadas de documento.
 *  - "title": junto al final del elemento (espacio vacío a su derecha), centrado verticalmente.
 *  - "block": dentro del carril libre, a la altura del borde superior del bloque.
 */
export function measureStops(): Measured {
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const { lane, size } = laneFor(vw);
  const pad = vw >= 768 ? 32 : 20;
  const laneX = (vw + Math.min(vw, MAX_W)) / 2 - pad - lane / 2 - size / 2;
  const max = Math.max(0, document.documentElement.scrollHeight - vh);

  const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-avatar]")).map((el) => {
    const r = el.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const isTitle = el.dataset.avatar === "title";
    const x = isTitle ? Math.min(laneX, r.right + window.scrollX + 24) : laneX;
    const y = isTitle ? top + r.height / 2 - size / 2 : top - size * 0.1;
    return { x, y, trigger: y + size / 2 - vh * 0.5 };
  });
  stops.sort((a, b) => a.trigger - b.trigger);
  if (stops.length) {
    stops[0].trigger = Math.min(stops[0].trigger, 0);
    const last = stops[stops.length - 1].trigger;
    if (last > max && last > 0) stops.forEach((s) => (s.trigger *= max / last)); // el último ancla se alcanza al final
  }
  return { stops, size };
}

/**
 * Posición objetivo para un scroll dado. Sin saltos: el trayecto se separa en dos fases
 * para no cruzar contenido. Hacia el carril: primero horizontal, luego baja. Hacia un título: baja por el carril y entra al final.
 */
export function targetAt(stops: Stop[], s: number): { x: number; y: number } | null {
  if (!stops.length) return null;
  if (s <= stops[0].trigger) return stops[0];
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i], b = stops[i + 1];
    if (s > b.trigger) continue;
    const hold = Math.min(HOLD, (b.trigger - a.trigger) * 0.15); // anclas cercanas: casi todo el scroll es trayecto
    const from = a.trigger + hold, to = b.trigger - hold;
    if (s <= from) return a;
    if (s >= to) return b;
    const t = (s - from) / (to - from);
    let tx: number, ty: number;
    if (Math.abs(b.x - a.x) < 2) { tx = 0; ty = smooth(t); }
    else if (b.x > a.x) { tx = smooth(t / 0.4); ty = smooth((t - 0.35) / 0.65); }
    else { tx = smooth((t - 0.6) / 0.4); ty = smooth(t / 0.65); }
    return { x: a.x + (b.x - a.x) * tx, y: a.y + (b.y - a.y) * ty };
  }
  return stops[stops.length - 1];
}
