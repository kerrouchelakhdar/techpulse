import { NextResponse } from "next/server";
import { fetchArticles } from "@/lib/data/articles";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await fetchArticles(20);
    return NextResponse.json({ ok: true, articles: items, count: items.length });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Failed" }, { status: 500 });
  }
}
