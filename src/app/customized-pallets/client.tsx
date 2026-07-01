"use client"

import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Link from "next/link"
import { ArrowRight, ClipboardList, Ruler, Settings, Truck } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us Your Requirements",
    desc: "Share your product dimensions, weight, storage setup, and any special requirements.",
  },
  {
    icon: Ruler,
    title: "We Design the Perfect Pallet",
    desc: "Our team creates a custom pallet design optimized for your specific needs.",
  },
  {
    icon: Settings,
    title: "Manufacturing & Quality Check",
    desc: "Built with precision in our Karachi facility. Every pallet inspected for quality.",
  },
  {
    icon: Truck,
    title: "Delivery Across Pakistan",
    desc: "Timely delivery to your location anywhere in Pakistan.",
  },
]

export default function CustomPalletsClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              Custom Pallet Manufacturing
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Standard sizes don&apos;t fit? No problem. We manufacture wooden and plastic pallets
              in any size, shape, or specification you need. Tell us what you need, we&apos;ll build it.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-wood-600 dark:text-wood-300 mb-4">How It Works</h2>
              <p className="text-[var(--text-secondary)]">
                From your idea to delivery — a simple 4-step process. Tell us your requirements and we handle the rest.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/custom-pallets.png"
                alt="Custom pallet manufacturing"
                width={600}
                height={400}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300 mb-4">
                  <step.icon size={28} />
                </div>
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-500 text-white text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300 mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-[var(--surface-alt)]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              Ready for a Custom Quote?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Tell us your requirements and we&apos;ll get back to you within 24 hours with a competitive quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
