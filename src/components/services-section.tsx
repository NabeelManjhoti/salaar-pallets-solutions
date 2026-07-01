"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TreePine, Container, Ruler, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    title: "New Wooden Pallets",
    description: "High-quality wooden pallets in standard and custom sizes. ISPM 15 certified, heat-treated, and built to last.",
    icon: TreePine,
    href: "/wooden-pallets",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  },
  {
    title: "New Plastic Pallets",
    description: "Durable, hygienic plastic pallets ideal for food, pharmaceutical, and clean-room environments.",
    icon: Container,
    href: "/plastic-pallets",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
  },
  {
    title: "Custom Sizes",
    description: "Any size, any specification. We manufacture pallets tailored to your exact product and storage requirements.",
    icon: Ruler,
    href: "/customized-pallets",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    title: "Pallet Repair Service",
    description: "Professional repair services to extend pallet life. Quick turnaround, competitive rates in Karachi.",
    icon: Wrench,
    href: "/contact",
    color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-600 dark:text-wood-300 mb-4">
            Our Products &amp; Services
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive pallet solutions for businesses of all sizes. From standard supply to custom manufacturing and repair.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex gap-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-wood-300 dark:hover:border-forest-600 hover:shadow-lg transition-all duration-300"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300">
                      {service.title}
                    </h3>
                    <ArrowRight size={18} className="shrink-0 text-[var(--text-secondary)] group-hover:text-wood-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
