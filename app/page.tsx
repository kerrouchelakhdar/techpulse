"use client";

import Link from "next/link";
import { useEffect, useState, Fragment } from "react";

interface Article {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  category: string | null;
  image_url: string | null;
  source_name: string | null;
  created_at: string | null;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "AI Tools", "No-Code", "Developer Tools", "Design Tools", "Marketing", "Productivity"];
  
  const categoryColors: Record<string, string> = {
    "AI Tools": "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    "No-Code": "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
    "Developer Tools": "bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700",
    "Design Tools": "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
    "Marketing": "bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700",
    "Productivity": "bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700",
    "All": "bg-slate-500 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-700"
  };

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
        setFilteredArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = articles;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredArticles(filtered);
  }, [selectedCategory, searchQuery, articles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent sm:text-6xl">
              TechPulse
            </h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Latest AI tools & tech innovations
            </p>
            
            {/* Categories Filter */}
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-semibold text-white
                    transition-all duration-300 transform
                    ${selectedCategory === cat 
                      ? categoryColors[cat] + " scale-110 shadow-lg" 
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    }
                  `}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mt-6 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
          <>
            {/* Results Count */}
            <div className="mb-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-slate-100">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'tool' : 'tools'}
                {selectedCategory !== "All" && <> in <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedCategory}</span></>}
              </p>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-12 text-center shadow-xl border border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-md">
                  <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">No Results Found</h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Ad Space - Top Banner */}
                <div className="mb-8 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                  <div className="h-24 flex items-center justify-center">
                    <div id="ad-top-banner" className="w-full max-w-3xl">
                      <p className="text-sm text-slate-400">Ad Space: 728x90 Banner</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article, index) => (
                    <Fragment key={article.id}>
                      <Link
                        href={`/article/${article.slug}`}
                        className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-md ring-1 ring-slate-200 dark:ring-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-blue-500 dark:hover:ring-blue-500"
                      >
                        {/* Image */}
                        {article.image_url ? (
                          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <img
                              src={article.image_url}
                              alt={article.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <svg className="h-16 w-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-5">
                          {/* Category Badge */}
                          {article.category && (
                            <div className="mb-3">
                              <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/50 px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                                {article.category}
                              </span>
                            </div>
                          )}

                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-3">
                            {article.title}
                          </h3>
                          
                          {/* Date */}
                          <div className="mt-auto flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <time dateTime={article.created_at || undefined}>
                              {article.created_at ? new Date(article.created_at).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              }) : 'Recent'}
                            </time>
                          </div>
                        </div>
                      </Link>

                      {/* Ad Space after every 6 articles */}
                      {(index + 1) % 6 === 0 && index < filteredArticles.length - 1 && (
                        <div className="col-span-full rounded-lg bg-slate-50 dark:bg-slate-800/50 p-6 text-center border border-dashed border-slate-300 dark:border-slate-700">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                          <div className="h-32 flex items-center justify-center">
                            <div id={`ad-inline-${Math.floor((index + 1) / 6)}`} className="w-full max-w-3xl">
                              <p className="text-sm text-slate-400">Ad Space: Inline Banner</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>

                {/* Ad Space - Bottom Banner */}
                <div className="mt-12 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Advertisement</div>
                  <div className="h-24 flex items-center justify-center">
                    <div id="ad-bottom-banner" className="w-full max-w-3xl">
                      <p className="text-sm text-slate-400">Ad Space: 728x90 Banner</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">TechPulse</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Discover the latest AI tools and tech innovations, curated daily with advanced AI technology.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {["AI Tools", "No-Code", "Developer Tools", "Design Tools", "Marketing", "Productivity"].map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">{cat}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} TechPulse. All rights reserved. | Powered by <span className="font-semibold text-blue-600 dark:text-blue-400">Supabase</span> + <span className="font-semibold text-slate-900 dark:text-slate-100">Next.js</span> + <span className="font-semibold text-indigo-600 dark:text-indigo-400">Gemini AI</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
