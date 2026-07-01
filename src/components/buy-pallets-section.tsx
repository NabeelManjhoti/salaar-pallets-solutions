"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ArrowRight } from "lucide-react"

export default function BuyPalletsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--surface-alt)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 dark:bg-forest-900 dark:text-forest-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <ShoppingCart size={16} />
              We Buy Pallets
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              Selling Old or Damaged Pallets?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              We purchase new, old, and damaged wooden and plastic pallets across Pakistan.
              Got surplus pallets taking up space? We&apos;ll buy them at competitive rates.
              Free pickup in Karachi. Contact us for a quote today.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "New and surplus pallets",
                "Used but functional pallets",
                "Damaged pallets for recycling",
                "Bulk quantities welcome",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-forest-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Sell Us Your Pallets <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/buy-pallets.jpg"
                alt="Large pile of wooden pallets for purchasing"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
