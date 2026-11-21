import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";

interface ArticleDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticleDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — Insights`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const index = INSIGHTS.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const article = INSIGHTS[index];
  const prevArticle = INSIGHTS[(index - 1 + INSIGHTS.length) % INSIGHTS.length];
  const nextArticle = INSIGHTS[(index + 1) % INSIGHTS.length];

  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-12 sm:py-16 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase text-steel-light hover:text-signal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Journal</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
              <span className="px-2.5 py-1 bg-signal text-obsidian font-semibold uppercase">
                {article.code}
              </span>
              <span className="text-ivory/80 uppercase">{article.category}</span>
              <span className="text-ivory/30">·</span>
              <span className="text-steel-light">{article.publishedAt}</span>
              <span className="text-ivory/30">·</span>
              <span className="text-steel-light">{article.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.03]">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl text-steel-light leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2 font-mono-tech text-xs text-ivory/80">
              AUTHORED BY <span className="text-signal">{article.author.toUpperCase()}</span> —{" "}
              {article.authorRole}
            </div>
          </div>
        </div>
      </section>

      <article className="bg-ivory text-obsidian py-12 sm:py-16 border-b border-concrete">
        <div className="iq-container">
          {/* Hero Plate */}
          <div className="border border-obsidian overflow-hidden aspect-[16/8] bg-obsidian mb-12">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Sticky Contents Rail */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="border border-obsidian bg-ivory-light p-5 space-y-3">
                <p className="font-mono-tech text-xs uppercase text-signal-hover">
                  [ SECTION INDEX ]
                </p>
                <nav className="space-y-2" aria-label="Article table of contents">
                  {article.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-sm font-medium text-obsidian hover:text-signal-hover py-1 border-b border-concrete last:border-b-0"
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border border-obsidian bg-obsidian text-ivory p-5 space-y-3">
                <p className="font-mono-tech text-xs uppercase text-signal">KEY FINDINGS</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ivory/85">
                  {article.keyTakeaways.map((take) => (
                    <li key={take} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-signal shrink-0 mt-1.5" aria-hidden="true" />
                      <span>{take}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Long-Form Editorial Body */}
            <div className="lg:col-span-8 max-w-[68ch] space-y-10">
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-28">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p) => (
                    <p key={p} className="text-base sm:text-lg text-steel-dark leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.callout && (
                    <blockquote className="my-6 p-5 border-l-4 border-signal bg-ivory-light font-mono-tech text-xs sm:text-sm text-obsidian">
                      {sec.callout}
                    </blockquote>
                  )}
                </section>
              ))}

              {/* Previous / Next Navigation */}
              <div className="pt-8 border-t border-obsidian grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={`/insights/${prevArticle.slug}`}
                  className="p-5 border border-concrete hover:border-obsidian bg-ivory-light transition-colors"
                >
                  <span className="font-mono-tech text-[11px] text-steel-dark uppercase flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Brief</span>
                  </span>
                  <span className="font-display text-base font-semibold text-obsidian">
                    {prevArticle.title}
                  </span>
                </Link>

                <Link
                  href={`/insights/${nextArticle.slug}`}
                  className="p-5 border border-concrete hover:border-obsidian bg-ivory-light transition-colors sm:text-right"
                >
                  <span className="font-mono-tech text-[11px] text-steel-dark uppercase flex items-center sm:justify-end gap-1 mb-1">
                    <span>Next Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-signal" />
                  </span>
                  <span className="font-display text-base font-semibold text-obsidian">
                    {nextArticle.title}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ConversionCtaSection />
    </>
  );
}
