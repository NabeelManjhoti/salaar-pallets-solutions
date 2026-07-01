"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-wood-900 via-wood-800 to-forest-900">
      <Image
        src="/images/hero-bg.jpg"
        alt="Warehouse with pallet storage"
        fill
        className="absolute inset-0 object-cover opacity-20 mix-blend-overlay"
        priority
      />

      <div className="container-custom relative py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-wood-500/20 text-wood-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck size={16} />
              Karachi-Based | Serving All Pakistan
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted Partner for{" "}
              <span className="text-wood-300">Wooden &amp; Plastic Pallets</span>
            </h1>

            <p className="text-lg text-wood-200/80 leading-relaxed mb-8 max-w-xl">
              Premium quality pallets supply, custom manufacturing, repair services,
              and pallet purchasing across Pakistan. Quality you can rely on.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-500 hover:bg-wood-400 text-wood-900 font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-wood-500/25"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/wooden-pallets"
                className="inline-flex items-center gap-2 border border-wood-400/40 text-wood-200 hover:bg-wood-700/30 font-medium px-6 py-3 rounded-xl transition-all"
              >
                Our Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-wood-500/20 to-forest-400/20 animate-pulse" />
              <div className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-to-br from-wood-400/10 to-forest-300/10 backdrop-blur-3xl flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/images/logo.png"
                    alt="Salaar Pallet Solutions"
                    width={160}
                    height={160}
                    className="rounded-full opacity-60 mx-auto"
                  />
                  <div className="text-wood-400/60 text-sm mt-4">Salaar Pallet Solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
