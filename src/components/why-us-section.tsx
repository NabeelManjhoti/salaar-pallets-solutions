"use client"

import { motion } from "framer-motion"
import { Shield, Truck, BadgeCheck, Headphones } from "lucide-react"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "All pallets meet industry standards. ISPM 15 certified wood and food-grade plastic options available.",
  },
  {
    icon: Truck,
    title: "All-Pakistan Delivery",
    description: "Based in Karachi, delivering to businesses across Pakistan. Fast, reliable logistics network.",
  },
  {
    icon: Shield,
    title: "Custom Manufacturing",
    description: "Any size, any specification. We build pallets to match your exact requirements.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer support. WhatsApp, phone, and email — we're always here to help.",
  },
]

export default function WhyUsSection() {
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
            Why Choose Salaar Pallet Solutions?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            We combine local manufacturing expertise with global quality standards to serve businesses across Pakistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-wood-300 dark:hover:border-forest-600 transition-all duration-300"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300 mb-4">
                <reason.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
