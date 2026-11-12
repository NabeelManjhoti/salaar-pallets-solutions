import { BadgeCheck, Truck, Recycle, MapPin } from "lucide-react"

const capabilities = [
  {
    num: "01",
    icon: BadgeCheck,
    title: "ISPM-15 Certified Heat Treatment",
    desc: "Every export pallet is heated to 56°C core temperature for 30 minutes in certified chambers and stamped with the official IPPC logo for seamless customs clearance.",
  },
  {
    num: "02",
    icon: Truck,
    title: "All-Pakistan Fleet Freight Network",
    desc: "Factory-direct loading from Baldia Town, Karachi with daily container-load dispatches to industrial zones in Lahore, Faisalabad, Multan, Hub, and Port Qasim.",
  },
  {
    num: "03",
    icon: Recycle,
    title: "Scrap Pallet Buyback & Reconditioning",
    desc: "Complete warehouse clearing services. We buy damaged wooden and plastic pallets at fair industrial rates or trade them for newly certified units.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--surface-alt)] border-y border-[var(--border)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Yard Advantage Statement */}
          <div className="lg:col-span-5 bg-[var(--bg)] p-6 sm:p-8 rounded-xl border border-[var(--border)]">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-3 font-semibold">
              <MapPin size={14} /> Baldia Town, Karachi Facility
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)] mb-4 leading-tight">
              Direct Mill Sourcing. Zero Middlemen.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Unlike commercial traders who resell broker inventory, Salaar operates direct woodworking, pneumatic nail-clinching, and lumber sizing yards in Karachi&apos;s primary industrial timber hub.
            </p>

            <div className="space-y-3 pt-4 border-t border-[var(--border)] font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                <span className="text-[var(--text-secondary)]">Location</span>
                <span className="text-[var(--text)] font-medium">Timber Market, Karachi</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--border)]/60">
                <span className="text-[var(--text-secondary)]">Lumber Species</span>
                <span className="text-[var(--text)] font-medium">Pakistani Pine, Hardwood, Fir</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[var(--text-secondary)]">Fastening Spec</span>
                <span className="text-[var(--text)] font-medium">Screw-Shank Annular Ring Nails</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 High-Signal Capability Rows */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)]"
              >
                <div className="font-mono text-xs font-semibold text-neutral-400 mt-1">
                  {cap.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <cap.icon size={16} className="text-wood-600 dark:text-wood-400 shrink-0" strokeWidth={1.75} />
                    <h3 className="text-base font-semibold text-[var(--text)]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}