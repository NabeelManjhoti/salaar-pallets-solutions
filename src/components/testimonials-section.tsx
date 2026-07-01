"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Raza",
    company: "Karachi Logistics Co.",
    text: "We've been sourcing pallets from Salaar Pallet Solutions for over two years. Consistent quality, timely delivery, and excellent after-sales support. Highly recommended.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    company: "Prime Industries",
    text: "Got custom-sized pallets for our pharmaceutical warehouse. Perfect fit, great quality, and the team was incredibly helpful throughout the process.",
    rating: 5,
  },
  {
    name: "Usman Khan",
    company: "Pak Goods Export",
    text: "They also buy back damaged pallets, which is a huge plus for us. Complete pallet lifecycle management from one reliable partner.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--surface-alt)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-600 dark:text-wood-300 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Trusted by businesses across Pakistan for quality pallets and reliable service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-sm text-wood-600 dark:text-wood-300">{t.name}</div>
                <div className="text-xs text-[var(--text-secondary)]">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
