import type { MetadataRoute } from "next";
import { env, hasSupabaseClientEnv } from "@/lib/env";
import { fetchArticles } from "@/lib/data/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.siteUrl.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "hourly", priority: 1.0 },
  ];

  if (hasSupabaseClientEnv()) {
    try {
      const articles = await fetchArticles(50);
      for (const a of articles) {
        entries.push({
          url: `${base}/article/${a.slug}`,
          changeFrequency: "daily",
          priority: 0.7,
          lastModified: a.published_date ? new Date(a.published_date) : undefined,
        });
      }
    } catch {
      // ignore; fallback to base only
    }
  }

  return entries;
}
