"use client"

import Image from "next/image"
import { ShieldCheck, Factory, Truck } from "lucide-react"

const operations = [
  {
    icon: Factory,
    title: "Karachi Sawmill & Fabrication Yard",
    desc: "Located in Baldia Town near Karachi's primary timber trade corridors. We cut, plane, notch, and pneumatically assemble timber pallets under strict dimensional tolerances.",
  },
  {
    icon: ShieldCheck,
    title: "ISPM-15 Heat-Treatment Compliance",
    desc: "Certified chamber heating to 56°C core temperature for 30 minutes, meeting international phytosanitary import/export standards with verifiable IPPC stamping.",
  },
  {
    icon: Truck,
    title: "Direct Flatbed & Inter-City Logistics",
    desc: "Serving Karachi industrial zones (SITE, Korangi, Port Qasim, North Karachi, F.B. Area, Hub) alongside regular freight truckloads to Lahore, Faisalabad, and Multan.",
  },
]

export default function AboutClient() {
  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              Company Overview &amp; Facility
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              About Salaar Pallet Solutions
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Karachi-based manufacturer, supplier, repairer, and buyer of heavy-duty industrial wooden and HDPE plastic pallets serving enterprise supply chains across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-4">
                Industrial Timber Craftsmanship &amp; Fleet Service
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                <p>
                  Salaar Pallet Solutions was founded to solve a critical bottleneck in Pakistan&apos;s logistics sector: inconsistent lumber grading, loose fastener clinching, and uncertified wood leading to costly shipping damages and export customs rejections.
                </p>
                <p>
                  Operating directly from Karachi&apos;s industrial timber hub, we eliminate speculative middleman brokerages. We purchase raw Pakistani pine and hardwood directly from source mills, machine deck boards and stringers in-house, and drive annular ring-shank nails using precision pneumatic tooling.
                </p>
                <p>
                  Today, our yards manage complete pallet lifecycles: brand new custom timber production, sanitary HDPE polymer distribution, rapid warehouse repairs, and scrap pallet buyback.
                </p>
              </div>

              <div className="space-y-4">
                {operations.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)]">
                      <item.icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text)] mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] relative h-72">
                <Image
                  src="/images/about-warehouse.png"
                  alt="Salaar Pallet Solutions warehouse facility in Karachi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] font-mono text-xs space-y-2">
                <div className="text-neutral-400 font-semibold uppercase tracking-wider pb-2 border-b border-[var(--border)]">
                  Facility Specifications
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-secondary)]">Location</span>
                  <span className="text-[var(--text)] font-medium">Baldia Town 4/5, Karachi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-secondary)]">Primary Lumber</span>
                  <span className="text-[var(--text)] font-medium">Kiln-Dried Pine &amp; Hardwood</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                  <span className="text-[var(--text-secondary)]">Export Standard</span>
                  <span className="text-emerald-500 font-medium">ISPM-15 Heat Treated (56°C)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--text-secondary)]">Dispatch Range</span>
                  <span className="text-[var(--text)] font-medium">Karachi &amp; All-Pakistan Freight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}