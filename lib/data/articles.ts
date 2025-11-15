import { supabaseServer } from "../supabase/server";
import { hasSupabaseClientEnv } from "../env";
import type { Article } from "../types";

const ARTICLE_COLUMNS = [
  "id",
  "slug",
  "title",
  "description",
  "content",
  "category",
  "author",
  "image_url",
  "source_name",
  "source_url",
  "source_id",
  "seo_keywords",
  "meta_description",
  "view_count",
  "share_count",
  "is_published",
  "is_featured",
  "published_date",
  "updated_at",
  "created_at",
].join(", ");

export async function fetchArticles(limit = 10): Promise<Article[]> {
  if (!hasSupabaseClientEnv()) return [];
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("articles")
    .select(ARTICLE_COLUMNS)
    .eq("is_published", true)
    .order("published_date", { ascending: false })
    .limit(limit);
  if (error) throw new Error(`Supabase error: ${error.message}`);
  return (data as unknown as Article[]) ?? [];
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  if (!hasSupabaseClientEnv()) return null;
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("articles")
    .select(ARTICLE_COLUMNS)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`Supabase error: ${error.message}`);
  return (data as unknown as Article) ?? null;
}

export async function fetchArticlesByCategory(category: string, limit = 20): Promise<Article[]> {
  if (!hasSupabaseClientEnv()) return [];
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("articles")
    .select(ARTICLE_COLUMNS)
    .eq("is_published", true)
    .eq("category", category)
    .order("published_date", { ascending: false })
    .limit(limit);
  if (error) throw new Error(`Supabase error: ${error.message}`);
  return (data as unknown as Article[]) ?? [];
}
