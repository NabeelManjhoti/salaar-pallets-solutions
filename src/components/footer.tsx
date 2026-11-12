import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#101114] text-neutral-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Salaar Pallet Solutions" width={32} height={32} className="rounded-md" />
              <span className="text-base font-semibold text-neutral-100 tracking-tight">
                Salaar Pallet Solutions
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Karachi-based manufacturer and supplier of heavy-duty wooden and HDPE plastic pallets.
              Providing repair services, custom dimensions, and scrap buyback across Pakistan.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/wooden-pallets", label: "Wooden Pallets" },
                { href: "/plastic-pallets", label: "Plastic Pallets" },
                { href: "/customized-pallets", label: "Custom Pallets" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 hover:text-neutral-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-neutral-300">
              <a href="tel:+923338538388" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors">
                <Phone size={15} /> 0333 8538388
              </a>
              <a href="mailto:nabeelalimanjhoti@gmail.com" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors">
                <Mail size={15} /> nabeelalimanjhoti@gmail.com
              </a>
              <div className="flex items-start gap-2 text-neutral-400">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>Baldia Town 4/5, Timber Market, Karachi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Salaar Pallet Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
