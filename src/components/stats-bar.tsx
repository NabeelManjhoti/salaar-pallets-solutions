"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10K+", label: "Pallets Supplied" },
  { value: "100+", label: "Happy Clients" },
  { value: "All PK", label: "Serving Pakistan" },
]

export default function StatsBar() {
  return (
    <section className="bg-wood-600">
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-wood-100">
                {stat.value}
              </div>
              <div className="text-sm text-wood-200/80 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
