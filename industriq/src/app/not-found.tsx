import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-obsidian text-ivory py-24 sm:py-32 border-b border-ivory/15">
      <div className="iq-container max-w-3xl space-y-6">
        <span className="font-mono-tech text-xs uppercase tracking-widest text-signal">
          ERROR // 404 — DATUM NOT FOUND
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
          SPECIFICATION ROUTE DOES NOT EXIST.
        </h1>
        <p className="text-base sm:text-lg text-steel-light leading-relaxed">
          The requested CAD dossier or plant directory route has moved or does not exist on this
          server.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] bg-signal hover:bg-signal-hover text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Plant Index</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
