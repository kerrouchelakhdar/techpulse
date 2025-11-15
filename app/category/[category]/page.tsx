import { fetchArticlesByCategory } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";

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

      {/* Top Banner 728x90 */}
      <div className="mb-8 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
        <div className="min-h-[90px] flex items-center justify-center">
          <div id="ad-category-top" className="w-full max-w-3xl">
            <AdSlot keyId="97cc9759b96fe229e934cc5f4183d23c" width={728} height={90} />
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {items.map((a, index) => (
          <>
            <li key={a.id} className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
              <a href={`/article/${a.slug}`} className="block">
                <h3 className="text-lg font-medium">{a.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{a.description}</p>
              </a>
            </li>

            {(index + 1) % 6 === 0 && index < items.length - 1 && (
              <li key={`ad-inline-${Math.floor((index + 1) / 6)}`} className="list-none">
                <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-6 text-center border border-dashed border-slate-300 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                  <div className="min-h-[250px] flex items-center justify-center">
                    <div id={`ad-category-inline-${Math.floor((index + 1) / 6)}`} className="w-full max-w-3xl">
                      <AdSlot keyId="3e128bbc109c992fa09a322d3d6f37fe" width={300} height={250} />
                    </div>
                  </div>
                </div>
              </li>
            )}
          </>
        ))}
      </ul>

      {/* Bottom Banner 300x250 */}
      <div className="mt-12 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
        <div className="min-h-[250px] flex items-center justify-center">
          <div id="ad-category-bottom" className="w-full max-w-3xl">
            <AdSlot keyId="3e128bbc109c992fa09a322d3d6f37fe" width={300} height={250} />
          </div>
        </div>
      </div>
    </main>
  );
}
