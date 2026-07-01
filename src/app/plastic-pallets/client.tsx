"use client"

import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Link from "next/link"
import { ArrowRight, Droplets, Thermometer, Syringe, Infinity } from "lucide-react"

const features = [
  { icon: Droplets, text: "100% waterproof and moisture resistant" },
  { icon: Thermometer, text: "Withstands extreme temperatures (-20°C to 60°C)" },
  { icon: Syringe, text: "Hygienic — easy to clean, no bacterial growth" },
  { icon: Infinity, text: "Long lifespan (5-10 years), 100% recyclable" },
]

const specs = [
  { label: "Material", value: "HDPE / PP" },
  { label: "Sizes", value: "Standard & custom sizes" },
  { label: "Load Capacity", value: "500 — 1500 kg" },
  { label: "Weight", value: "Lightweight — 10-25 kg" },
  { label: "Applications", value: "Food, pharma, chemicals, cold storage" },
]

export default function PlasticPalletsClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-600 dark:text-forest-300 mb-4">
              New Plastic Pallets
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Premium plastic pallets for industries that demand hygiene, consistency, and durability.
              Ideal for food processing, pharmaceuticals, and clean-room environments.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest-600 dark:text-forest-300 mb-6">
                Why Choose Plastic Pallets?
              </h2>
              <div className="space-y-4 mb-8">
                {features.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <f.icon size={18} />
                    </div>
                    <p className="text-[var(--text-secondary)] py-1">{f.text}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/plastic-pallets.png"
                  alt="Stack of plastic pallets"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-display text-lg font-semibold text-forest-600 dark:text-forest-300 mb-4">
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
              src="/images/plastic-pallets-2.png"
              alt="Modern warehouse with organized storage"
              width={1200}
              height={400}
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Food Grade", desc: "FDA-approved materials safe for direct food contact. Easy to sanitize." },
              { title: "Pharma Ready", desc: "Smooth surfaces with no splinters — ideal for clean rooms and GMP facilities." },
              { title: "Export Compatible", desc: "No ISPM 15 treatment needed. Ready for international shipping." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300 mb-3">
                  <ArrowRight size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-600 dark:text-forest-300 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
