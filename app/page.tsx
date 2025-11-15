import Link from "next/link";
import { env, hasSupabaseClientEnv } from "@/lib/env";
import { fetchArticles } from "@/lib/data/articles";

export const dynamic = "force-dynamic";

export default async function Home() {
  const hasEnv = hasSupabaseClientEnv();
  const articles = hasEnv ? await fetchArticles(10) : [];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">{env.siteName}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Curated daily tech insights powered by Supabase + Next.js
        </p>
      </header>

      {!hasEnv ? (
        <div className="rounded-lg border border-dashed p-6">
          <h2 className="mb-2 text-xl font-semibold">Setup required</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in
            `.env.local`, then restart the dev server.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {articles.map((a) => (
            <li key={a.id} className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
              <Link href={`/article/${a.slug}`} className="block">
                <h3 className="text-lg font-medium">{a.title}</h3>
                {a.description ? (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {a.description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
