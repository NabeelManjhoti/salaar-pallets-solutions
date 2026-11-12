const stats = [
  { value: "10,000+", label: "Units Supplied Annually", note: "Standard & custom specs" },
  { value: "100%", label: "ISPM-15 Certified", note: "Kiln-dried & heat treated" },
  { value: "2,000 kg", label: "Max Dynamic Payload", note: "Reinforced 4-way block design" },
  { value: "24–48h", label: "Fast Karachi Dispatch", note: "All-Pakistan freight network" },
]

export default function StatsBar() {
  return (
    <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-wood-600 pl-4 py-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-[var(--text)] tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-[var(--text)] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}