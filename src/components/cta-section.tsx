import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#121316] text-neutral-100 border-t border-neutral-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-wood-400 mb-3 font-semibold">
            Direct Mill Quotations · Baldia Town Facility
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
            Request a Pallet Supply or Scrap Buyback Quotation
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Direct mill pricing, certified ISPM-15 heat treatment documentation, and dedicated flatbed delivery across Pakistan. Contact our Karachi team today.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Request Commercial Quote <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/923338538388?text=Hi%20Salaar%20Pallet%20Solutions!%20I%20need%20a%20pallet%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-600 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              <MessageSquare size={16} /> WhatsApp Factory Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}