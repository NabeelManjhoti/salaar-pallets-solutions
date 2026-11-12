"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TreePine, Package, Weight, Recycle } from "lucide-react"

const features = [
  { icon: TreePine, title: "Kiln-Dried Timber", text: "Manufactured from selected Pakistani pine and dense hardwood with moisture control." },
  { icon: Package, title: "Standard & Euro Specs", text: "Ready stock of 1200×1000mm industrial and 1200×800mm Euro dimensions." },
  { icon: Weight, title: "Reinforced 2,000 kg Dynamic Rating", text: "Engineered stringers and annular ring-shank fasteners resist heavy forklift shifts." },
  { icon: Recycle, title: "ISPM-15 Export Certified", text: "Official IPPC heat treatment stamp (56°C for 30 min) for smooth customs clearance." },
]

const specs = [
  { label: "Timber Species", value: "Pakistani Pine / Kiln-Dried Hardwood" },
  { label: "Standard Footprint", value: "1200 × 1000 mm / 1200 × 800 mm" },
  { label: "Dynamic Capacity", value: "1,500 – 2,000 kg" },
  { label: "Static Load Rating", value: "4,000 kg" },
  { label: "Phytosanitary Spec", value: "ISPM-15 Heat Treated (HT)" },
  { label: "Entry Configuration", value: "4-Way Forklift / Pallet Jack" },
]

export default function WoodenPalletsClient() {
  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              Timber Platform Systems
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Heavy-Duty Wooden Pallets
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Precision-cut timber platforms for domestic warehousing and international export. Heat-treated, ISPM-15 certified, and built to survive multi-tier racking and rough transit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-6">
                Engineered for Distribution &amp; Logistics
              </h2>
              <div className="space-y-4 mb-8">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)]">
                      <f.icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text)] mb-0.5">{f.title}</div>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Request Wooden Pallet Quote <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] relative h-64">
                <Image
                  src="/images/wooden-pallets.png"
                  alt="Stack of precision manufactured wooden pallets"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--text)]">Standard Specifications</h3>
                  <span className="font-mono text-[10px] text-wood-600 dark:text-wood-400 bg-wood-50 dark:bg-neutral-800 px-2 py-0.5 rounded border border-[var(--border)]">
                    SPEC: SP-1210-WD
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/60 last:border-0">
                      <span className="text-[var(--text-secondary)]">{s.label}</span>
                      <span className="font-mono font-medium text-[var(--text)]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--surface-alt)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Immediate Warehouse Stock", desc: "Standard 1200×1000mm units stored in our Baldia Town yard ready for same-day dispatch." },
              { title: "Custom Dimensions", desc: "Any width, length, top-deck spacing, or double-wing overhang engineered for non-standard loads." },
              { title: "Turnaround & Reconditioning", desc: "Trade damaged wooden pallets for newly certified platforms with minimal cash outlay." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                <div className="flex items-center gap-2 mb-2">
                  <Check size={16} className="text-wood-600 dark:text-wood-400" />
                  <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}