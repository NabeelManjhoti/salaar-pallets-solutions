"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-wood-600 to-forest-600">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-wood-100/80 max-w-xl mx-auto mb-8">
            Whether you need new pallets, custom sizes, repair services, or want to sell your old pallets — we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-wood-700 font-semibold px-6 py-3 rounded-xl hover:bg-wood-50 transition-all"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/923338538388?text=Hi%20Salaar%20Pallet%20Solutions!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
