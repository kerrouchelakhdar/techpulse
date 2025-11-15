import { createClient } from "@supabase/supabase-js";
import { env } from "../env";

export function supabaseServer() {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    throw new Error("Supabase env vars are not configured");
  }
  return createClient(env.supabaseUrl, env.supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
