import { fetchArticlesByCategory } from "@/lib/data/articles";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const items = await fetchArticlesByCategory(decodeURIComponent(params.category));
  if (!items.length) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-bold">Category: {decodeURIComponent(params.category)}</h1>
      <ul className="space-y-4">
        {items.map((a) => (
          <li key={a.id} className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
            <a href={`/article/${a.slug}`} className="block">
              <h3 className="text-lg font-medium">{a.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{a.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
