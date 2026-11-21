"use client";

import { useRef } from "react";

export interface TabOption {
  id: string;
  label: string;
  code?: string;
}

interface TabsProps {
  tabs: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  theme?: "light" | "dark";
  ariaLabel: string;
}

export function Tabs({ tabs, activeId, onChange, theme = "light", ariaLabel }: TabsProps) {
  const isDark = theme === "dark";
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % tabs.length;
      onChange(tabs[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + tabs.length) % tabs.length;
      onChange(tabs[prev].id);
      tabRefs.current[prev]?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`flex flex-wrap gap-2 border-b pb-3 ${
        isDark ? "border-ivory/15" : "border-concrete"
      }`}
    >
      {tabs.map((tab, idx) => {
        const selected = tab.id === activeId;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            role="tab"
            type="button"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`px-4 py-2.5 min-h-[44px] font-mono-tech text-xs uppercase tracking-wider border transition-colors flex items-center gap-2 ${
              selected
                ? "bg-signal text-obsidian border-signal font-semibold"
                : isDark
                  ? "bg-obsidian-elevated text-ivory/80 border-ivory/15 hover:border-ivory/40 hover:text-ivory"
                  : "bg-ivory text-obsidian/80 border-concrete hover:border-obsidian hover:text-obsidian"
            }`}
          >
            {tab.code && (
              <span className={selected ? "text-obsidian/70" : "text-signal"}>{tab.code}</span>
            )}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
