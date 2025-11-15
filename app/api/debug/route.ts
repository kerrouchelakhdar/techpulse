import { NextResponse } from "next/server";
import { env, hasSupabaseClientEnv } from "@/lib/env";
import { supabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const masked = (v?: string) => (v ? `${v.slice(0, 6)}…${v.slice(-4)}` : null);

  const result: any = {
    siteName: env.siteName,
    siteUrl: env.siteUrl,
    supabaseUrl: env.supabaseUrl,
    supabaseAnonKeyMasked: masked(env.supabaseAnonKey),
    configured: hasSupabaseClientEnv(),
  };

  if (hasSupabaseClientEnv()) {
    try {
      const supabase = supabaseServer();
      const { count, error } = await supabase
        .from("articles")
        .select("id", { count: "exact", head: true });
      result.supabase = { reachable: !error, count: count ?? 0, error: error?.message };
    } catch (e: any) {
      result.supabase = { reachable: false, error: e?.message };
    }
  }

  return NextResponse.json(result);
}
