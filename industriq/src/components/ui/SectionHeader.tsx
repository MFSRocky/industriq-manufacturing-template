import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  indexCode: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  theme?: "light" | "dark";
}

export function SectionHeader({
  indexCode,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b ${
        isDark ? "border-ivory/15" : "border-concrete"
      }`}
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest uppercase">
            <span className="inline-block w-2 h-2 bg-signal" aria-hidden="true" />
            <span className={isDark ? "text-signal" : "text-signal-hover"}>{indexCode}</span>
          </span>
          <span
            className={`font-mono-tech text-xs tracking-widest uppercase ${
              isDark ? "text-steel-light" : "text-steel-dark"
            }`}
          >
            {eyebrow}
          </span>
        </div>

        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.02] ${
            isDark ? "text-ivory" : "text-obsidian"
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? "text-steel-light" : "text-steel-dark"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {ctaLabel && ctaHref && (
        <div className="shrink-0">
          <Link
            href={ctaHref}
            className={`group inline-flex items-center gap-3 px-5 py-3 min-h-[44px] border font-mono-tech text-xs uppercase tracking-wider transition-colors ${
              isDark
                ? "border-ivory/25 text-ivory hover:border-signal hover:bg-signal hover:text-obsidian"
                : "border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory"
            }`}
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
