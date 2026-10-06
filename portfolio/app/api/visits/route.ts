import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

async function rpc(fn: "get_visit_count" | "increment_visit_count"): Promise<number | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/${fn}`, {
      method: "POST", cache: "no-store", body: "{}",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    });
    if (!res.ok) return null;
    const n = Number(await res.json());
    return Number.isFinite(n) ? n : null;
  } catch { return null; }
}
export async function GET() { return NextResponse.json({ count: await rpc("get_visit_count") }); }
export async function POST() { return NextResponse.json({ count: await rpc("increment_visit_count") }); }
