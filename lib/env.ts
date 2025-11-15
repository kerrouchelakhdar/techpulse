export const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TechPulse",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE_KEY,
  revalidateSecret: process.env.REVALIDATE_SECRET,
};

export function hasSupabaseClientEnv() {
  return Boolean(env.supabaseUrl && env.supabaseAnonKey);
}
