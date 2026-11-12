"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Droplets, Thermometer, ShieldCheck, RefreshCw } from "lucide-react"

const features = [
  { icon: Droplets, title: "100% Waterproof & Impermeable", text: "Zero moisture absorption. Impervious to acids, alkalis, oils, and chemical spills." },
  { icon: Thermometer, title: "Sub-Zero to Extreme Heat", text: "Maintains structural stiffness from -20°C cold storage to +60°C transport conditions." },
  { icon: ShieldCheck, title: "Sanitary Clean-Room Standard", text: "Non-porous, splinter-free surface designed for pressure steam washdowns and GMP compliance." },
  { icon: RefreshCw, title: "Long Cycle Life & Recyclable", text: "High impact resistance with 5–8 year operational life, fully re-granulated at end of lifecycle." },
]

const specs = [
  { label: "Polymer Grade", value: "Virgin / Recycled HDPE & PP Blend" },
  { label: "Standard Footprint", value: "1200 × 1000 mm / 1200 × 800 mm" },
  { label: "Dynamic Capacity", value: "1,200 – 1,500 kg" },
  { label: "Static Load Rating", value: "4,500 kg" },
  { label: "Deck Style", value: "Vented Mesh / Solid Smooth Surface" },
  { label: "Entry Configuration", value: "4-Way Forklift Access" },
]

export default function PlasticPalletsClient() {
  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              HDPE Polymer Systems
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Industrial Plastic Pallets
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Durable, hygienic high-density polyethylene pallets engineered for food processing, pharmaceutical warehousing, cold storage, and chemical industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-6">
                Engineered for Hygienic &amp; Sterile Handling
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
                Request Plastic Pallet Quote <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] relative h-64">
                <Image
                  src="/images/plastic-pallets.png"
                  alt="Stack of industrial HDPE blue plastic pallets"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--text)]">Standard Specifications</h3>
                  <span className="font-mono text-[10px] text-wood-600 dark:text-wood-400 bg-wood-50 dark:bg-neutral-800 px-2 py-0.5 rounded border border-[var(--border)]">
                    SPEC: SP-1210-PL
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
              { title: "Food & Pharma Compliant", desc: "Smooth non-porous resin prevents bacterial pooling and allows easy chemical or high-pressure washing." },
              { title: "Exempt from ISPM-15", desc: "No phytosanitary fumigation or heat treatment required for export shipments to any worldwide port." },
              { title: "Scrap Plastic Buyback", desc: "Broken plastic skids purchased by weight and recycled directly back into industrial resin feedstocks." },
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