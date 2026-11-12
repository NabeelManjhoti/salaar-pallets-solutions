"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ClipboardList, Ruler, Settings, Truck } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Payload & Dimension Review",
    desc: "Share your specific machinery dimensions, dynamic freight weights, pallet racking clearances, and export constraints.",
  },
  {
    step: "02",
    icon: Ruler,
    title: "CAD & Timber Engineering",
    desc: "Our mill calculates stringer thickness, top-deck spacing, fastener distribution, and notched fork pocket depths.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Kiln-Drying & Factory Assembly",
    desc: "Manufactured at our Karachi facility using automated pneumatic clinching, annular ring-shank nails, and ISPM-15 heat chambers.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Direct Flatbed Delivery",
    desc: "Coordinated shipment directly to your factory or warehouse across Karachi, Hub, Lahore, and Port Qasim.",
  },
]

export default function CustomPalletsClient() {
  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              Custom Engineering &amp; Sizing
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Custom Pallet Manufacturing
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              When standard warehouse footprints do not meet your machinery or shipping envelope constraints. We manufacture specialized wooden and plastic pallets to exact load and dimension specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-4">
                Tailored for Non-Standard Industrial Loads
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                From oversized heavy equipment skids to chemical drum cradles, our Karachi sawmill crafts custom configurations:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wood-600" />
                  Heavy-duty 2-way and 4-way solid wood stringer designs up to 3,000 kg capacity
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wood-600" />
                  Custom deck overhangs (single wing, double wing) for crane and sling lifting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wood-600" />
                  Close-boarded solid top decks for fragile cartons and bagged chemicals
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Submit Custom Dimensions <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] relative h-72">
                <Image
                  src="/images/custom-pallets.png"
                  alt="Craftsman manufacturing custom wooden pallets in workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.step} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text)]">
                      <step.icon size={18} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text)] mb-1.5">{step.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[var(--surface-alt)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Have Technical Drawings or Spec Sheets?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
              Send us your pallet CAD drawings, target payload, or warehouse dimensions for a formal quotation within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Request Custom Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}