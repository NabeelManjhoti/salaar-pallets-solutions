"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Layers } from "lucide-react"

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"wood" | "plastic">("wood")

  return (
    <section className="relative overflow-hidden bg-[#121316] text-neutral-100 border-b border-neutral-800">
      {/* Background authentic warehouse photography with controlled dark scrim */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Industrial pallet warehouse and logistics facility"
        fill
        className="absolute inset-0 object-cover opacity-15"
        priority
      />

      <div className="container-custom relative py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Quiet, Authoritative Commercial Statement */}
          <div className="lg:col-span-7">
            {/* Industrial Stencil Signature Detail */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-neutral-700/80 bg-neutral-900/80 font-mono text-xs text-neutral-300 mb-6 tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>PK-104 · ISPM-15 COMPLIANT · KARACHI FACTORY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-5">
              Industrial Pallets Engineered for Heavy Freight &amp; Logistics
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Karachi-based manufacturer of kiln-dried wooden pallets, ISPM-15 certified export platforms, and hygienic HDPE plastic pallets. Daily supply, custom builds, and scrap pallet buyback.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Request Quotation <ArrowRight size={16} />
              </Link>
              <Link
                href="/wooden-pallets"
                className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-600 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                View Specifications
              </Link>
            </div>

            {/* Quick Fact Metrics Strip */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-neutral-800/80 text-xs">
              <div>
                <div className="font-mono text-sm font-semibold text-neutral-100">4-Way</div>
                <div className="text-neutral-400 mt-0.5">Forklift Entry</div>
              </div>
              <div>
                <div className="font-mono text-sm font-semibold text-neutral-100">2,000 kg</div>
                <div className="text-neutral-400 mt-0.5">Dynamic Load</div>
              </div>
              <div>
                <div className="font-mono text-sm font-semibold text-neutral-100">24-48h</div>
                <div className="text-neutral-400 mt-0.5">Karachi Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Technical Pallet Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-800 bg-[#17181c] shadow-2xl overflow-hidden">
              {/* Card Header & Material Selector */}
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 bg-[#131417]">
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-neutral-400" />
                  <span className="text-xs font-medium text-neutral-300">Spec Blueprint</span>
                </div>
                <div className="flex items-center rounded-md bg-neutral-900 p-0.5 border border-neutral-800 text-xs">
                  <button
                    onClick={() => setActiveTab("wood")}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === "wood"
                        ? "bg-neutral-700 text-white shadow-xs"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    Pine Timber
                  </button>
                  <button
                    onClick={() => setActiveTab("plastic")}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === "plastic"
                        ? "bg-neutral-700 text-white shadow-xs"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    HDPE Polymer
                  </button>
                </div>
              </div>

              {/* Product Visual Container */}
              <div className="relative h-48 bg-neutral-900/60 flex items-center justify-center p-4 border-b border-neutral-800/80">
                <Image
                  src={activeTab === "wood" ? "/images/wooden-pallets.png" : "/images/plastic-pallets.png"}
                  alt={activeTab === "wood" ? "Standard Wooden Pallet" : "Industrial HDPE Plastic Pallet"}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] text-neutral-400 bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
                  {activeTab === "wood" ? "SPEC: SP-1210-WD (HEAVY DUTY)" : "SPEC: SP-1210-PL (HYGIENIC)"}
                </span>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Dimensions</span>
                  <span className="font-mono text-neutral-200">1200 × 1000 × 144 mm</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Dynamic Load</span>
                  <span className="font-mono text-neutral-200">
                    {activeTab === "wood" ? "1,500 – 2,000 kg" : "1,200 – 1,500 kg"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Static Rating</span>
                  <span className="font-mono text-neutral-200">
                    {activeTab === "wood" ? "4,000 kg" : "4,500 kg"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Forklift Access</span>
                  <span className="font-mono text-neutral-200">4-Way Entry (All Sides)</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-neutral-400">Compliance</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                    <Check size={13} /> {activeTab === "wood" ? "ISPM-15 Heat Treated" : "Food Grade / Washable"}
                  </span>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-3 bg-[#131417] border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">Custom lengths &amp; notch cuts available</span>
                <Link
                  href={activeTab === "wood" ? "/wooden-pallets" : "/plastic-pallets"}
                  className="text-xs font-medium text-wood-400 hover:text-wood-300 transition-colors inline-flex items-center gap-1"
                >
                  Full Sheet <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}