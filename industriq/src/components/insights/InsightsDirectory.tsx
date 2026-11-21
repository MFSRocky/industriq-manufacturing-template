"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, RotateCcw } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

const CATEGORIES = ["All", "CNC Systems", "Metrology", "Robotics", "Metallurgy"] as const;

export function InsightsDirectory() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INSIGHTS.filter((item) => {
      const catOk = category === "All" || item.category === category;
      const qOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, query]);

  return (
    <div className="space-y-10">
      {/* Toolbar */}
      <div className="border border-obsidian bg-ivory-light p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by discipline">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={active}
                className={`px-3.5 py-2 min-h-[44px] font-mono-tech text-xs uppercase border transition-colors ${
                  active
                    ? "bg-obsidian text-ivory border-obsidian"
                    : "bg-ivory text-obsidian border-concrete hover:border-obsidian"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-steel-dark absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search technical briefs..."
            aria-label="Search insights"
            className="w-full min-h-[44px] pl-9 pr-3 bg-ivory border border-concrete focus:border-obsidian text-sm text-obsidian focus:outline-none"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-obsidian bg-ivory-light p-12 text-center space-y-4">
          <p className="font-mono-tech text-xs text-signal-hover uppercase">ZERO ARTICLES FOUND</p>
          <p className="text-sm text-steel-dark">
            No engineering papers matched &ldquo;{query}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-obsidian text-ivory font-mono-tech text-xs uppercase"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Directory</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="border border-obsidian bg-ivory-light flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] border-b border-obsidian overflow-hidden bg-obsidian">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-obsidian/90 text-ivory font-mono-tech text-[11px] uppercase border border-ivory/20">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-xs text-steel-dark">
                    <span className="text-signal-hover">{article.code}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-obsidian leading-snug">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="hover:text-signal-hover transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-steel-dark leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-concrete flex items-center justify-between font-mono-tech text-xs bg-ivory">
                <span className="text-obsidian">{article.author}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-obsidian hover:text-signal-hover font-semibold"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-4 h-4 text-signal" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
