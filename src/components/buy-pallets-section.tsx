import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Truck } from "lucide-react"

const acceptedTypes = [
  "Standard 1200×1000mm & Euro 1200×800mm pallets",
  "Used, functional, or warehouse-clearing surplus",
  "Broken or fractured pallets for lumber recycling",
  "Industrial HDPE plastic platforms and skids",
]

export default function BuyPalletsSection() {
  return (
    <section className="py-16 md:py-20 border-b border-[var(--border)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-3 font-semibold">
              <Truck size={14} /> Warehouse Surplus &amp; Scrap Purchasing
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)] mb-4 leading-tight">
              Selling Surplus or Damaged Pallets? We Buy in Bulk.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
              Free up valuable floor space in your distribution center. We purchase used, broken, and retired wooden and plastic pallets across Karachi and greater Sindh with arranged flatbed transport and prompt settlement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {acceptedTypes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <Check size={15} className="text-wood-600 dark:text-wood-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Schedule Pallet Inspection <ArrowRight size={16} />
              </Link>
              <span className="text-xs text-[var(--text-secondary)]">
                Karachi on-site evaluation within 24 hours
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-4/3 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] relative">
              <Image
                src="/images/buy-pallets.jpg"
                alt="Stack of industrial pallets in yard ready for purchase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}