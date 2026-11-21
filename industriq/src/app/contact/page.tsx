import type { Metadata } from "next";
import { ShieldCheck, Clock, FileCode2 } from "lucide-react";
import { QuoteContactForm } from "@/components/forms/QuoteContactForm";
import { FacilitySwitcher } from "@/components/contact/FacilitySwitcher";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Contact & Production RFQ — Engineering Desk",
  description:
    "Submit STEP/IGES CAD specifications for 5-axis CNC machining, robotic production cells, or DMLS metal additive manufacturing. 24-hour DFM feedback guaranteed.",
};

const CONTACT_FAQ: AccordionEntry[] = [
  {
    id: "rfq-sla",
    code: "01",
    question: "How quickly will I receive DFM feedback and unit pricing?",
    answer:
      "Standard CNC and DMLS packages receive full manufacturability feedback, alloy confirmation, and unit/tooling breakdown within 24 business hours. Turnkey multi-robot cell proposals deliver preliminary cycle studies within 5 business days.",
  },
  {
    id: "rfq-moq",
    code: "02",
    question: "Do you enforce minimum order quantities for prototypes?",
    answer:
      "No. We execute single-unit First Article prototypes alongside 25,000+ unit production series, preserving the exact machining fixtures and Zeiss CMM inspection programs as your volume scales.",
  },
  {
    id: "rfq-expedite",
    code: "03",
    question: "Is AOG (Aircraft-on-Ground) or line-down expedited machining available?",
    answer:
      "Yes. Reserved rapid-response cells in Stuttgart and Austin allocate 72-hour priority spindle windows for emergency aerospace and EV assembly line stoppages.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-obsidian text-ivory border-b border-ivory/15">
        <div className="iq-container py-14 sm:py-20">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-signal">
              [ ENGINEERING RFQ DESK // STUTTGART · ZURICH · AUSTIN ]
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.98]">
              SUBMIT SPECIFICATIONS. RECEIVE DFM &amp; PRICING IN 24H.
            </h1>
            <p className="text-base sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Direct engineering intake for CNC billets, metal additive brackets, and turnkey
              robotic production cells.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory text-obsidian py-14 sm:py-20 border-b border-concrete">
        <div className="iq-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 border border-obsidian bg-ivory-light p-6 sm:p-10">
            <div className="border-b border-concrete pb-5 mb-8">
              <span className="font-mono-tech text-xs uppercase text-signal-hover block mb-1">
                [ STEP 01 // SPECIFICATION INTAKE ]
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-obsidian">
                Production Request for Quote (RFQ)
              </h2>
            </div>

            <QuoteContactForm />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <FacilitySwitcher />

            <div className="border border-obsidian bg-ivory-light p-6 space-y-4">
              <p className="font-mono-tech text-xs uppercase text-signal-hover">
                [ INTAKE SLA GUARANTEES ]
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-semibold">24-Hour DFM Review</h3>
                    <p className="text-xs sm:text-sm text-steel-dark">
                      Every submission is audited by a senior CAM &amp; metallurgy engineer—never a
                      blind instant algorithm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      TISAX &amp; ITAR Encrypted Vault
                    </h3>
                    <p className="text-xs sm:text-sm text-steel-dark">
                      Mutual NDA issued prior to STEP, IGES, or CATIA assembly upload.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCode2 className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      Supported Native CAD Formats
                    </h3>
                    <p className="text-xs sm:text-sm text-steel-dark">
                      STEP AP242, Parasolid (.x_t), IGES, SolidWorks, NX, CATIA V5/V6.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ivory-warm text-obsidian py-14 sm:py-20 border-b border-concrete">
        <div className="iq-container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-signal-hover">
              [ QUOTING FAQ ]
            </span>
            <h2 className="font-display text-3xl font-semibold">Pre-Submission Questions</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={CONTACT_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
