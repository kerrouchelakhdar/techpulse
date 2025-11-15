import { fetchArticleBySlug } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await fetchArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <article className="prose dark:prose-invert">
        <h1 className="mb-2 text-3xl font-bold">{article.title}</h1>
        {article.description ? (
          <p className="text-zinc-600 dark:text-zinc-400">{article.description}</p>
        ) : null}
        {article.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image_url}
            alt={article.title}
            className="my-6 w-full rounded-lg"
          />
        ) : null}
        <ReactMarkdown>{article.content}</ReactMarkdown>
        {article.source_url ? (
          <p>
            Source: {" "}
            <a className="underline" href={article.source_url} target="_blank">
              {article.source_name || "Link"}
            </a>
          </p>
        ) : null}
      </article>
    </main>
  );
}
