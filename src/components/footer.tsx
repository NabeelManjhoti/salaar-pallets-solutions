import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-wood-900 text-wood-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Salaar Pallet Solutions" width={36} height={36} className="rounded-lg" />
              <span className="font-display text-lg font-bold text-wood-100">
                Salaar Pallet Solutions
              </span>
            </div>
            <p className="text-wood-300 text-sm leading-relaxed">
              Karachi-based supplier of premium wooden and plastic pallets.
              We also provide pallet repair services and purchase used/damaged
              pallets across Pakistan.
            </p>
          </div>

          <div>
            <h3 className="font-display text-wood-100 font-semibold mb-4">Quick Links</h3>
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
                  className="hover:text-wood-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-wood-100 font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+923338538388" className="flex items-center gap-2 hover:text-wood-100 transition-colors">
                <Phone size={16} /> 0333 8538388
              </a>
              <a href="mailto:nabeelalimanjhoti@gmail.com" className="flex items-center gap-2 hover:text-wood-100 transition-colors">
                <Mail size={16} /> nabeelalimanjhoti@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Baldia Town 4/5, Timber Market, Karachi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-wood-700 text-center text-sm text-wood-400">
          <p>&copy; {new Date().getFullYear()} Salaar Pallet Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
