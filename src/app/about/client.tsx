"use client"

import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-wood-50 to-wood-100 dark:from-wood-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              About Us
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Based in Karachi, Salaar Pallet Solutions is a trusted provider of wooden pallets,
              plastic pallets, custom manufacturing, and pallet repair services across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-wood-600 dark:text-wood-300 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Salaar Pallet Solutions was founded with a simple mission: provide Pakistani businesses
                  with reliable, high-quality pallets at competitive prices. We saw a gap in the market —
                  businesses struggling to find consistent pallet suppliers with quality assurance.
                </p>
                <p>
                  Starting from Karachi, we&apos;ve grown to serve clients across Pakistan, from small
                  warehouses to large manufacturing facilities and export businesses.
                </p>
                <p>
                  Today, we offer a complete pallet lifecycle solution: new pallets supply (wooden and plastic),
                  custom manufacturing, professional repair services, and purchasing of used/damaged pallets.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/about-warehouse.png"
                  alt="Salaar Pallet Solutions warehouse"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "To be Pakistan's most trusted pallet partner — delivering quality, reliability, and value to every business we serve.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  desc: "To build a nationwide network that makes quality pallets accessible to every business in Pakistan, supporting the country's logistics and industrial growth.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  desc: "Quality without compromise. Integrity in every deal. Service that goes beyond expectations. Relationships built on trust.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-wood-600 dark:text-wood-300 mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-[var(--surface-alt)]">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-wood-600 dark:text-wood-300 mb-4">
            Serving All of Pakistan
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            While headquartered in Karachi, our delivery network covers all major cities including
            Lahore, Islamabad, Faisalabad, Multan, Hyderabad, and beyond. Wherever your business is,
            we deliver.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
