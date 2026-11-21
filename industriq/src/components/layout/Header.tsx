"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV, SITE_CONFIG } from "@/data/site";
import { BrandMark } from "@/components/ui/TechnicalBlueprintSvg";
import { CommandSearchModal } from "./CommandSearchModal";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Global Cmd/Ctrl + K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-obsidian/95 backdrop-blur-md border-b border-ivory/15 text-ivory">
        {/* Top operational telemetry sub-bar on larger viewports */}
        <div className="hidden lg:block border-b border-ivory/10 bg-obsidian-deep">
          <div className="iq-container flex items-center justify-between h-8 text-[11px] font-mono-tech text-steel-light tracking-wider">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-ivory/90">
                <span className="w-1.5 h-1.5 bg-signal animate-iq-pulse" aria-hidden="true" />
                {SITE_CONFIG.defaultStatus}
              </span>
              <span className="text-ivory/25">|</span>
              <span>ISO 9001 · AS9100D · ISO 13485</span>
            </div>
            <div className="flex items-center gap-5">
              <span>STUTTGART · ZURICH · AUSTIN</span>
              <a
                href={`mailto:${SITE_CONFIG.rfqEmail}`}
                className="text-ivory/80 hover:text-signal transition-colors"
              >
                {SITE_CONFIG.rfqEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="iq-container flex items-center justify-between h-16 lg:h-[72px] gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-signal"
            aria-label="INDUSTRIQ Home"
          >
            <BrandMark className="w-7 h-7 text-ivory group-hover:text-signal transition-colors" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[-0.04em] text-ivory">
                {SITE_CONFIG.brand}
              </span>
              <span className="font-mono-tech text-[9px] tracking-[0.18em] text-steel-light uppercase">
                MFG SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary navigation">
            {PRIMARY_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs font-mono-tech uppercase tracking-wider transition-colors relative flex items-center gap-1.5 min-h-[40px] ${
                    isActive
                      ? "text-signal"
                      : "text-ivory/80 hover:text-ivory hover:bg-ivory/5"
                  }`}
                >
                  <span className="text-[10px] text-steel">{item.code}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-signal"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search engineering catalog"
              className="flex items-center gap-2 px-3 min-h-[44px] border border-ivory/20 text-ivory/80 hover:border-ivory/50 hover:text-ivory font-mono-tech text-xs uppercase transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-ivory/10 text-steel-light">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 min-h-[44px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="xl:hidden flex items-center justify-center gap-2 px-3 min-w-[44px] min-h-[44px] border border-ivory/25 text-ivory hover:border-signal transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden xs:inline font-mono-tech text-xs uppercase">
                {mobileOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-obsidian text-ivory overflow-y-auto border-t border-ivory/15 pb-[max(2rem,env(safe-area-inset-bottom))]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="iq-container py-6 flex flex-col justify-between min-h-full gap-8">
            <nav className="divide-y divide-ivory/15 border-y border-ivory/15" aria-label="Mobile pages">
              {PRIMARY_NAV.map((item) => {
                const isActive =
                  pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between py-4 min-h-[56px] group"
                  >
                    <div className="flex items-baseline gap-4 pr-4">
                      <span className="font-mono-tech text-xs text-signal">{item.code}</span>
                      <div>
                        <span
                          className={`font-display text-xl font-semibold block ${
                            isActive ? "text-signal" : "text-ivory"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="text-xs text-steel-light line-clamp-1">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-steel-light group-hover:text-signal shrink-0" />
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-4 min-h-[52px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider"
              >
                <span>Submit Production RFQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="p-4 border border-ivory/15 bg-obsidian-elevated font-mono-tech text-xs text-steel-light space-y-1">
                <p className="text-ivory">{SITE_CONFIG.defaultStatus}</p>
                <p>{SITE_CONFIG.phone} · {SITE_CONFIG.rfqEmail}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <CommandSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
