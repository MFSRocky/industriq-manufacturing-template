import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsSection() {
  const featured = INSIGHTS[0];
  const secondary = INSIGHTS.slice(1, 3);

  return (
    <section className="bg-ivory text-obsidian py-20 lg:py-28 border-b border-concrete">
      <div className="iq-container space-y-12">
        <SectionHeader
          indexCode="09"
          eyebrow="// INSIGHTS & ENGINEERING JOURNAL"
          title="Technical monographs from our metrology and metallurgy teams."
          subtitle="Field-tested research covering thermal control, hybrid additive manufacturing, and automated inspection architectures."
          ctaLabel="Read All Briefs"
          ctaHref="/insights"
        />

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Flagship Editorial Card */}
            <article className="lg:col-span-7 border border-obsidian bg-ivory-light flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/9] border-b border-obsidian overflow-hidden bg-obsidian">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-obsidian text-ivory font-mono-tech text-[11px] uppercase">
                    {featured.code} · {featured.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs text-steel-dark">
                    <span>{featured.publishedAt}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                    <span>·</span>
                    <span>{featured.author}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian leading-tight">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="hover:text-signal-hover transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="text-base text-steel-dark leading-relaxed">{featured.excerpt}</p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 border-t border-concrete flex items-center justify-between">
                <span className="font-mono-tech text-xs text-steel-dark uppercase">
                  {featured.authorRole}
                </span>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase font-semibold text-obsidian hover:text-signal-hover transition-colors"
                >
                  <span>Read Paper</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>
              </div>
            </article>

            {/* Right Stacked Articles */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondary.map((article) => (
                <article
                  key={article.slug}
                  className="flex-1 border border-obsidian bg-ivory-light p-6 flex flex-col justify-between gap-4 hover:bg-ivory-warm transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono-tech text-[11px] text-steel-dark">
                      <span className="text-signal-hover font-semibold">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-obsidian leading-snug">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="hover:text-signal-hover transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-steel-dark leading-relaxed">{article.excerpt}</p>
                  </div>

                  <div className="pt-3 border-t border-concrete flex items-center justify-between font-mono-tech text-xs">
                    <span className="text-steel-dark">{article.author}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-obsidian hover:text-signal-hover transition-colors"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-4 h-4 text-signal" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
