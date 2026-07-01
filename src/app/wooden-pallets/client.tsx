"use client"

import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TreePine, Package, Weight, Recycle } from "lucide-react"

const features = [
  { icon: TreePine, text: "Made from premium quality Pakistani wood" },
  { icon: Package, text: "Standard & custom sizes available" },
  { icon: Weight, text: "High load capacity — up to 2000 kg" },
  { icon: Recycle, text: "Repairable, recyclable, and eco-friendly" },
]

const specs = [
  { label: "Material", value: "Hardwood / Softwood" },
  { label: "Sizes", value: "48x40, 48x48, custom sizes" },
  { label: "Load Capacity", value: "500 — 2000 kg" },
  { label: "Treatment", value: "Heat-treated (ISPM 15)" },
  { label: "Applications", value: "Warehousing, logistics, export" },
]

export default function WoodenPalletsClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-wood-50 to-wood-100 dark:from-wood-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              New Wooden Pallets
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              High-quality wooden pallets for every industry. From standard warehouse pallets to custom sizes
              for specialized applications — we supply businesses across Pakistan with durable, reliable pallets.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-wood-600 dark:text-wood-300 mb-6">
                Why Choose Our Wooden Pallets?
              </h2>
              <div className="space-y-4 mb-8">
                {features.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300">
                      <f.icon size={18} />
                    </div>
                    <p className="text-[var(--text-secondary)] py-1">{f.text}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/wooden-pallets.png"
                  alt="Stack of wooden pallets"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300 mb-4">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b border-[var(--border)] last:border-0">
                      <span className="text-sm text-[var(--text-secondary)]">{s.label}</span>
                      <span className="text-sm font-medium text-[var(--text)]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-[var(--surface-alt)]">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] mb-8">
            <Image
              src="/images/wooden-pallets-2.jpg"
              alt="Rows of wooden pallets in warehouse"
              width={1200}
              height={400}
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Warehouse Ready", desc: "Standard pallets in stock for immediate delivery across Karachi and Pakistan." },
              { title: "Export Quality", desc: "ISPM 15 certified heat-treated pallets for international shipping compliance." },
              { title: "Custom Built", desc: "Need specific dimensions? We manufacture wooden pallets in any size." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <CheckCircle2 size={24} className="text-wood-500 mb-3" />
                <h3 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
