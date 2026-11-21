"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionEntry {
  id: string;
  code?: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  theme?: "light" | "dark";
  defaultOpenId?: string;
}

export function Accordion({ items, theme = "light", defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);
  const isDark = theme === "dark";

  return (
    <div className={`border-t ${isDark ? "border-ivory/15" : "border-concrete"}`}>
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const triggerId = `accordion-trigger-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border-b ${isDark ? "border-ivory/15" : "border-concrete"}`}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`w-full flex items-center justify-between gap-4 py-5 px-1 text-left transition-colors min-h-[56px] ${
                isDark ? "hover:bg-ivory/5 text-ivory" : "hover:bg-obsidian/[0.03] text-obsidian"
              }`}
            >
              <div className="flex items-baseline gap-4 min-w-0">
                <span className="font-mono-tech text-xs text-signal shrink-0">
                  {item.code ?? String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base sm:text-lg font-medium tracking-tight">
                  {item.question}
                </span>
              </div>
              <span
                className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-colors ${
                  isOpen
                    ? "border-signal bg-signal text-obsidian"
                    : isDark
                      ? "border-ivory/25 text-ivory"
                      : "border-concrete text-obsidian"
                }`}
                aria-hidden="true"
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`pb-6 pl-9 pr-4 text-sm sm:text-base leading-relaxed ${
                isDark ? "text-steel-light" : "text-steel-dark"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
