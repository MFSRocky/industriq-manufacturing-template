"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowUpRight } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { CAPABILITY_SPECS } from "@/data/capabilities";
import { INDUSTRIES } from "@/data/industries";
import { PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

interface SearchResult {
  id: string;
  type: "Solution" | "Capability" | "Industry" | "Project" | "Insight";
  code: string;
  title: string;
  subtitle: string;
  href: string;
}

interface CommandSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandSearchModal({ isOpen, onClose }: CommandSearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const index = useMemo<SearchResult[]>(() => {
    const sol = SOLUTIONS.map((s) => ({
      id: `sol-${s.id}`,
      type: "Solution" as const,
      code: s.code,
      title: s.title,
      subtitle: `${s.category} · ${s.tolerance}`,
      href: `/solutions#${s.id}`,
    }));
    const cap = CAPABILITY_SPECS.map((c) => ({
      id: `cap-${c.id}`,
      type: "Capability" as const,
      code: c.code,
      title: c.process,
      subtitle: `${c.machineClass} · ${c.tolerance}`,
      href: `/capabilities?q=${encodeURIComponent(c.process)}`,
    }));
    const ind = INDUSTRIES.map((i) => ({
      id: `ind-${i.id}`,
      type: "Industry" as const,
      code: `IND-${i.index}`,
      title: i.name,
      subtitle: i.certifications.join(" · "),
      href: `/industries#${i.slug}`,
    }));
    const prj = PROJECTS.map((p) => ({
      id: `prj-${p.slug}`,
      type: "Project" as const,
      code: p.code,
      title: p.title,
      subtitle: `${p.sector} · ${p.material}`,
      href: `/projects/${p.slug}`,
    }));
    const art = INSIGHTS.map((a) => ({
      id: `art-${a.slug}`,
      type: "Insight" as const,
      code: a.code,
      title: a.title,
      subtitle: `${a.category} · ${a.readTime}`,
      href: `/insights/${a.slug}`,
    }));
    return [...sol, ...prj, ...ind, ...cap, ...art];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [index, query]);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        router.push(filtered[activeIndex].href);
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, filtered, activeIndex, router]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Global engineering database search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-obsidian border border-ivory/25 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-ivory/15 bg-obsidian-elevated">
          <Search className="w-4 h-4 text-signal shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder="Search CNC capabilities, alloys (Ti-6Al-4V), case studies, standards..."
            className="w-full bg-transparent text-ivory placeholder:text-steel-light text-sm focus:outline-none"
            aria-label="Search site directory"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search modal"
            className="p-2 text-steel-light hover:text-ivory min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-ivory/10">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-mono-tech text-xs uppercase text-signal mb-2">ZERO MATCHES</p>
              <p className="text-sm text-steel-light">
                No records matched &ldquo;{query}&rdquo;. Try searching &ldquo;5-Axis&rdquo;,
                &ldquo;Ti-6Al-4V&rdquo;, &ldquo;AS9100D&rdquo;, or &ldquo;Battery&rdquo;.
              </p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between gap-4 px-5 py-3.5 transition-colors ${
                  idx === activeIndex ? "bg-ivory/10" : "hover:bg-ivory/5"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="font-mono-tech text-[11px] uppercase px-1.5 py-0.5 bg-signal/15 text-signal border border-signal/30">
                      {item.type}
                    </span>
                    <span className="font-mono-tech text-[11px] text-steel-light">{item.code}</span>
                  </div>
                  <p className="font-display text-sm sm:text-base font-medium text-ivory truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-steel-light truncate">{item.subtitle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-steel-light shrink-0" />
              </Link>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-ivory/15 bg-obsidian-deep flex items-center justify-between text-[11px] font-mono-tech text-steel-light">
          <span>↑↓ NAVIGATE · ENTER OPEN</span>
          <span>ESC CLOSE</span>
        </div>
      </div>
    </div>
  );
}
