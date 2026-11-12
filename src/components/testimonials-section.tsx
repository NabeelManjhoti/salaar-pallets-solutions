interface Reference {
  name: string
  role: string
  company: string
  location: string
  specs: string
  quote: string
}

const references: Reference[] = [
  {
    name: "Tariq Mehmood",
    role: "Head of Logistics",
    company: "Indus Sea Freight & Logistics",
    location: "Port Qasim, Karachi",
    specs: "Order: 600× ISPM-15 Heat-Treated 1200×1000mm Pine Pallets",
    quote:
      "For export consignments to Jebel Ali and European ports, proper IPPC stamping and zero moisture compliance are non-negotiable. Salaar provided verified chamber documentation and consistent dimension tolerance across all truckloads.",
  },
  {
    name: "Dr. Farhan Siddiqui",
    role: "Supply Chain Manager",
    company: "Apex Healthcare Manufacturing",
    location: "Korangi Industrial Area",
    specs: "Order: 250× HDPE Hygienic Blue Polymer Skids",
    quote:
      "Our cold storage and pharmaceutical clean-rooms require pallets that can withstand rigorous chemical washdowns without splintering or harboring microbial growth. Their HDPE pallets perform flawlessly in our racks.",
  },
  {
    name: "Zeeshan Akram",
    role: "Operations Director",
    company: "Standard Textile Mills",
    location: "SITE Area, Karachi",
    specs: "Monthly Contract: Pallet Sizing & Damaged Scrap Buyback",
    quote:
      "Salaar handles our complete pallet turnaround: delivering reinforced 4-way heavy platforms for yarn pallets and clearing out fractured units monthly. Honest count, fair credit, and prompt flatbed pickup.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--surface-alt)] border-b border-[var(--border)]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
            Commercial Client References
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)] mb-3">
            Trusted by Pakistani Freight &amp; Industrial Operations
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Real logistics managers and export directors rely on our manufacturing consistency and timber certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[11px] text-wood-600 dark:text-wood-400 pb-3 mb-4 border-b border-[var(--border)]">
                  {ref.specs}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  &ldquo;{ref.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)]/70">
                <div className="font-semibold text-sm text-[var(--text)]">{ref.name}</div>
                <div className="text-xs text-[var(--text-secondary)]">{ref.role} · {ref.company}</div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">{ref.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}