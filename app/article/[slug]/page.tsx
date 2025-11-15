import { fetchArticleBySlug } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import AdSlot from "@/components/AdSlot";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);
  if (!article) {
    console.warn("Article not found for slug", slug, "— check env vars NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY and slug correctness");
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Header */}
      <header className="border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to articles
          </Link>
        </div>
      </header>

      {/* Article with Side Ads */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar Ads (desktop only) */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                <div id="ad-left-sidebar" className="mx-auto w-full max-w-[160px]">
                  <AdSlot keyId="79e58fc995d412a8a983d32385893738" width={160} height={600} />
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <div className="col-span-12 xl:col-span-8">
            <article className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
          {/* Hero */}
          {article.image_url ? (
            <div className="aspect-[21/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={article.image_url}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[21/9] w-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg className="h-24 w-24 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
          )}

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              {article.category && (
                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  {article.category}
                </span>
              )}
              {article.source_name && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  {article.source_name}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {article.title}
            </h1>
            {article.description && (
              <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-400">
                {article.description}
              </p>
            )}

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

            {/* Article Content */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:shadow-xl">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Source Link */}
            {article.source_url && (
              <div className="mt-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Original Source</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Visit the original article for more details</p>
                  </div>
                  <a
                    href={article.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                  >
                    Visit Source
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
            </article>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>

          {/* Right Sidebar Ads (desktop only) */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                <div id="ad-right-sidebar" className="mx-auto w-full max-w-[300px]">
                  <AdSlot keyId="009d099c2897d96773aa78b6aa8938c2" width={160} height={300} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
