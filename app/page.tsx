import Link from "next/link";
import { env, hasSupabaseClientEnv } from "@/lib/env";
import { fetchArticles } from "@/lib/data/articles";

export const dynamic = "force-dynamic";

export default async function Home() {
  const hasEnv = hasSupabaseClientEnv();
  const articles = hasEnv ? await fetchArticles(10) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent sm:text-6xl">
              {env.siteName}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover the latest AI tools, developer resources, and tech innovations. 
              Curated daily with insights powered by advanced AI.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 py-1 font-medium text-blue-700 dark:text-blue-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Updated Daily
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 font-medium text-indigo-700 dark:text-indigo-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                AI-Powered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {!hasEnv ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-12 text-center">
            <div className="mx-auto max-w-md">
              <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Setup Required</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Add environment variables to get started.
              </p>
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="rounded-2xl bg-white dark:bg-slate-900 p-12 text-center shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-md">
              <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">No Articles Yet</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Run the content pipeline to generate and publish articles.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:ring-blue-500 dark:hover:ring-blue-500"
              >
                {/* Category Badge */}
                {article.category && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-blue-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                )}

                {/* Image */}
                {article.image_url ? (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-1">
                      {article.description}
                    </p>
                  )}
                  
                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                      {article.source_name && (
                        <span className="inline-flex items-center gap-1">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          {article.source_name}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Powered by <span className="font-semibold text-blue-600 dark:text-blue-400">Supabase</span> + <span className="font-semibold text-slate-900 dark:text-slate-100">Next.js</span> + <span className="font-semibold text-indigo-600 dark:text-indigo-400">Gemini AI</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
