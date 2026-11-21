"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FACILITIES, PRIMARY_NAV, SITE_CONFIG } from "@/data/site";
import { BrandMark } from "@/components/ui/TechnicalBlueprintSvg";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = email.trim();
    if (!cleaned || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
      setStatus("error");
      setMessage("Enter a valid corporate or engineering email address.");
      return;
    }
    setStatus("success");
    setMessage(`Subscribed ${cleaned} to INDUSTRIQ quarterly engineering bulletins.`);
    setEmail("");
  };

  return (
    <footer className="bg-obsidian text-ivory border-t border-ivory/15">
      {/* Top Monumental Wordmark Band */}
      <div className="border-b border-ivory/15">
        <div className="iq-container py-10 sm:py-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono-tech text-xs text-signal uppercase tracking-widest">
              <BrandMark className="w-6 h-6 text-ivory" />
              <span>PRECISION MANUFACTURING SYSTEMS // EST. {SITE_CONFIG.foundedYear}</span>
            </div>
            <p className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.045em] leading-none text-ivory select-none">
              INDUSTRIQ
            </p>
          </div>

          <div className="max-w-md w-full">
            <p className="font-mono-tech text-xs uppercase tracking-wider text-ivory mb-2">
              Engineering Briefing Dispatch
            </p>
            <p className="text-sm text-steel-light mb-4">
              Quarterly research notes on multi-axis CNC dynamics, metrology standards, and turnkey factory cells.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="footer-newsletter" className="sr-only">
                Work Email Address
              </label>
              <input
                id="footer-newsletter"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="engineer@company.com"
                className="flex-1 min-h-[44px] px-3.5 bg-obsidian-elevated border border-ivory/25 text-ivory placeholder:text-steel text-sm focus:border-signal focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-[44px] px-5 bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
            {status === "error" && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-signal" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{message}</span>
              </p>
            )}
            {status === "success" && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-ivory" role="status">
                <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0" />
                <span>{message}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid Columns */}
      <div className="iq-container py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Column 1: Navigation */}
        <div className="lg:col-span-3">
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-signal mb-5">
            [ DIRECTORY ]
          </h3>
          <ul className="space-y-2.5">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-signal transition-colors py-1"
                >
                  <span className="font-mono-tech text-[11px] text-steel">{item.code}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-ivory hover:text-signal transition-colors py-1 font-medium"
              >
                <span className="font-mono-tech text-[11px] text-signal">08</span>
                <span>Contact &amp; RFQ Desk</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Capabilities & Standards */}
        <div className="lg:col-span-3">
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-signal mb-5">
            [ CORE SYSTEMS ]
          </h3>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            <li>
              <Link href="/solutions#five-axis-cnc" className="hover:text-ivory transition-colors">
                5-Axis Simultaneous CNC
              </Link>
            </li>
            <li>
              <Link href="/solutions#robotic-automation" className="hover:text-ivory transition-colors">
                Turnkey Robotic Cells
              </Link>
            </li>
            <li>
              <Link href="/solutions#additive-metal" className="hover:text-ivory transition-colors">
                DMLS Metal Additive
              </Link>
            </li>
            <li>
              <Link href="/solutions#optical-metrology" className="hover:text-ivory transition-colors">
                Zeiss Optical &amp; Tactile CMM
              </Link>
            </li>
            <li>
              <Link href="/capabilities" className="hover:text-ivory transition-colors">
                Alloy &amp; Tolerance Matrix
              </Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-ivory transition-colors">
                AS9100D &amp; ISO 13485 QMS
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3-4: Global Plants */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FACILITIES.map((plant) => (
            <div
              key={plant.id}
              className="border border-ivory/15 bg-obsidian-elevated/60 p-4 flex flex-col justify-between gap-4"
            >
              <div>
                <p className="font-mono-tech text-[11px] text-signal mb-1">{plant.code}</p>
                <p className="font-display text-lg font-semibold text-ivory">{plant.city}</p>
                <p className="font-mono-tech text-[11px] text-steel-light mt-1">
                  {plant.coordinates}
                </p>
                <p className="text-xs text-ivory/75 mt-3 leading-relaxed">{plant.address}</p>
              </div>
              <div className="pt-3 border-t border-ivory/10 text-xs font-mono-tech text-steel-light space-y-1">
                <p>{plant.areaSqm} · {plant.cells} Cells</p>
                <p className="text-ivory/90">{plant.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal & Telemetry Bar */}
      <div className="border-t border-ivory/15 bg-obsidian-deep">
        <div className="iq-container py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech text-steel-light">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/quality" className="hover:text-ivory transition-colors">
              QMS COMPLIANCE
            </Link>
            <Link href="/contact" className="hover:text-ivory transition-colors inline-flex items-center gap-1">
              <span>NDA / ITAR DESK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-signal" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
