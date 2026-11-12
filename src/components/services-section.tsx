import Link from "next/link"
import { TreePine, Container, Ruler, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    title: "New Wooden Pallets",
    description: "Hardwood and softwood platforms in standard 1200×1000mm and 1200×800mm Euro specs. ISPM-15 certified heat-treatment for international export.",
    icon: TreePine,
    href: "/wooden-pallets",
    tag: "Standard & Export Specs",
  },
  {
    title: "HDPE Plastic Pallets",
    description: "Hygienic, washable high-density polyethylene pallets for food processing, pharmaceutical warehouses, and cold storage applications.",
    icon: Container,
    href: "/plastic-pallets",
    tag: "Hygienic & Washable",
  },
  {
    title: "Custom Manufacturing",
    description: "Custom length stringers, 2-way and 4-way notch cuts, and reinforced double-wing decks built to exact load engineering requirements.",
    icon: Ruler,
    href: "/customized-pallets",
    tag: "Engineered Dimensions",
  },
  {
    title: "Pallet Repair & Reconditioning",
    description: "On-demand board replacement, runner re-securing, and structural certification to extend pallet cycle life at minimal cost.",
    icon: Wrench,
    href: "/contact",
    tag: "Lifecycle Maintenance",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
            Product &amp; Supply Scope
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)] mb-3">
            Manufactured for Heavy Industrial Freight
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Full-lifecycle pallet solutions for Pakistani manufacturers, exporters, and logistics fleets. Standard supply, custom builds, and ongoing maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text)]">
                <service.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-base font-semibold text-[var(--text)] group-hover:text-wood-600 dark:group-hover:text-wood-400 transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight size={15} className="shrink-0 text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors" />
                </div>
                <div className="font-mono text-[11px] text-wood-600 dark:text-wood-400 mb-2">
                  {service.tag}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}