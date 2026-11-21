"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, Loader2, ArrowUpRight, RotateCcw } from "lucide-react";

interface FormDataState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  process: string;
  material: string;
  toleranceTier: string;
  quantity: string;
  cadFormat: string;
  notes: string;
  ndaRequired: boolean;
}

const PROCESS_OPTIONS = [
  "5-Axis CNC Machining",
  "Turnkey Robotic Assembly & Laser Welding",
  "Direct Metal Additive (DMLS)",
  "Cleanroom Swiss Micro-Turning",
  "Heavy Mill-Turn & Deep Boring",
  "Contract CMM Optical Metrology",
];

const INITIAL_FORM: FormDataState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  sector: "Aerospace & Defense",
  process: PROCESS_OPTIONS[0],
  material: "Ti-6Al-4V Grade 5",
  toleranceTier: "Precision (±0.005 mm)",
  quantity: "25–250 units",
  cadFormat: "STEP (.stp / .step)",
  notes: "",
  ndaRequired: true,
};

export function QuoteContactForm({ preselectedProcess }: { preselectedProcess?: string }) {
  const [form, setForm] = useState<FormDataState>({
    ...INITIAL_FORM,
    process: preselectedProcess || INITIAL_FORM.process,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const paramProc = params.get("process");
    if (paramProc) {
      const matched = PROCESS_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(paramProc.toLowerCase().slice(0, 10))
      );
      if (matched) {
        setForm((prev) => ({ ...prev, process: matched }));
      }
    }
  }, []);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormDataState, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = "Enter your full name.";
    }
    if (!form.company.trim()) {
      nextErrors.company = "Organization or OEM name is required.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid business email address.";
    }
    if (!form.notes.trim() || form.notes.trim().length < 15) {
      nextErrors.notes = "Provide assembly notes, critical datums, or target schedule (min. 15 chars).";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setSubmitting(false);
    setSubmittedRef(`RFQ-2026-${randomCode}`);
  };

  if (submittedRef) {
    return (
      <div
        className="border border-obsidian bg-ivory-light p-8 sm:p-10 space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start justify-between gap-4 border-b border-concrete pb-6">
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover mb-2">
              TRANSMISSION CONFIRMED
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
              Engineering Dossier Queued
            </h3>
          </div>
          <CheckCircle2 className="w-8 h-8 text-signal shrink-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-ivory p-4 border border-concrete font-mono-tech text-xs">
          <div>
            <span className="text-steel block mb-1">TICKET ID</span>
            <span className="text-obsidian font-semibold">{submittedRef}</span>
          </div>
          <div>
            <span className="text-steel block mb-1">ASSIGNED HUB</span>
            <span className="text-obsidian font-semibold">Stuttgart / Zurich DFM Desk</span>
          </div>
          <div>
            <span className="text-steel block mb-1">DFM SLA</span>
            <span className="text-obsidian font-semibold">Within 24 Business Hours</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
          Thank you, <strong className="text-obsidian">{form.fullName}</strong> ({form.company}).
          Your specification request for <strong className="text-obsidian">{form.process}</strong>{" "}
          in <strong className="text-obsidian">{form.material}</strong> has been logged.{" "}
          {form.ndaRequired
            ? "A countersigned mutual NDA and secure STEP upload link will accompany our confirmation email to "
            : "Our senior applications engineer will respond to "}
          <span className="font-mono-tech text-obsidian">{form.email}</span>.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setForm(INITIAL_FORM);
            setErrors({});
          }}
          className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory font-mono-tech text-xs uppercase tracking-wider transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Submit Another Specification</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {submitError && (
        <div
          className="p-4 border border-signal bg-signal/10 flex items-center gap-3 text-sm text-obsidian"
          role="alert"
        >
          <AlertTriangle className="w-5 h-5 text-signal shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="rfq-name"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Full Name *
          </label>
          <input
            id="rfq-name"
            type="text"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            aria-invalid={Boolean(errors.fullName)}
            placeholder="Dr. Elena Weber"
            className={`w-full min-h-[46px] px-3.5 bg-ivory-light border text-obsidian text-sm focus:outline-none ${
              errors.fullName ? "border-signal" : "border-concrete focus:border-obsidian"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-signal-hover font-mono-tech">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="rfq-company"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Company / Organization *
          </label>
          <input
            id="rfq-company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            aria-invalid={Boolean(errors.company)}
            placeholder="AeroDynamics Propulsion GmbH"
            className={`w-full min-h-[46px] px-3.5 bg-ivory-light border text-obsidian text-sm focus:outline-none ${
              errors.company ? "border-signal" : "border-concrete focus:border-obsidian"
            }`}
          />
          {errors.company && (
            <p className="mt-1.5 text-xs text-signal-hover font-mono-tech">{errors.company}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="rfq-email"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Work Email *
          </label>
          <input
            id="rfq-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
            placeholder="e.weber@aerodynamics.de"
            className={`w-full min-h-[46px] px-3.5 bg-ivory-light border text-obsidian text-sm focus:outline-none ${
              errors.email ? "border-signal" : "border-concrete focus:border-obsidian"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-signal-hover font-mono-tech">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="rfq-phone"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Direct Phone (Optional)
          </label>
          <input
            id="rfq-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+49 89 4120 9900"
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="rfq-sector"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Industry Sector
          </label>
          <select
            id="rfq-sector"
            value={form.sector}
            onChange={(e) => setForm({ ...form, sector: e.target.value })}
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          >
            <option>Aerospace &amp; Defense</option>
            <option>Clean Energy &amp; Turbomachinery</option>
            <option>E-Mobility &amp; Automotive</option>
            <option>Medical &amp; Surgical Systems</option>
            <option>Robotics &amp; Semiconductor</option>
            <option>Industrial Machinery &amp; Rail</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="rfq-process"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Primary Process
          </label>
          <select
            id="rfq-process"
            value={form.process}
            onChange={(e) => setForm({ ...form, process: e.target.value })}
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          >
            {PROCESS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label
            htmlFor="rfq-material"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Target Alloy
          </label>
          <select
            id="rfq-material"
            value={form.material}
            onChange={(e) => setForm({ ...form, material: e.target.value })}
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          >
            <option>Ti-6Al-4V Grade 5</option>
            <option>Al 7075-T651</option>
            <option>Inconel 718</option>
            <option>316L / 316LVM Stainless</option>
            <option>17-4PH H900</option>
            <option>42CrMo4 Forged Steel</option>
            <option>Victrex PEEK</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="rfq-tolerance"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Tolerance Class
          </label>
          <select
            id="rfq-tolerance"
            value={form.toleranceTier}
            onChange={(e) => setForm({ ...form, toleranceTier: e.target.value })}
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          >
            <option>Standard (ISO 2768-m)</option>
            <option>Precision (±0.005 mm)</option>
            <option>Ultra-Precision (±0.002 mm / IT5)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="rfq-qty"
            className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
          >
            Annual Volume
          </label>
          <select
            id="rfq-qty"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full min-h-[46px] px-3.5 bg-ivory-light border border-concrete focus:border-obsidian text-obsidian text-sm focus:outline-none"
          >
            <option>1–10 Prototypes</option>
            <option>25–250 units</option>
            <option>250–2,500 units</option>
            <option>2,500–25,000+ series</option>
            <option>Turnkey Factory Cell</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="rfq-notes"
          className="block font-mono-tech text-xs uppercase tracking-wider text-obsidian mb-2"
        >
          Technical Brief, GD&amp;T Requirements &amp; Target Delivery *
        </label>
        <textarea
          id="rfq-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          aria-invalid={Boolean(errors.notes)}
          placeholder="Describe critical bores, surface finish callouts (e.g. Ra 0.2 µm), certification scope (AS9102 FAI / PPAP), and target SOP date..."
          className={`w-full p-3.5 bg-ivory-light border text-obsidian text-sm focus:outline-none ${
            errors.notes ? "border-signal" : "border-concrete focus:border-obsidian"
          }`}
        />
        {errors.notes && (
          <p className="mt-1.5 text-xs text-signal-hover font-mono-tech">{errors.notes}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="rfq-nda"
          type="checkbox"
          checked={form.ndaRequired}
          onChange={(e) => setForm({ ...form, ndaRequired: e.target.checked })}
          className="mt-1 w-4 h-4 accent-[#F47732]"
        />
        <label htmlFor="rfq-nda" className="text-sm text-steel-dark cursor-pointer">
          Issue mutual NDA &amp; encrypted CAD upload portal prior to STEP file transmission
          (recommended for ITAR / proprietary flight hardware).
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] bg-signal hover:bg-signal-hover disabled:opacity-60 text-obsidian font-mono-tech text-xs font-semibold uppercase tracking-wider transition-colors"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Encrypting Specification...</span>
          </>
        ) : (
          <>
            <span>Transmit Engineering RFQ</span>
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
