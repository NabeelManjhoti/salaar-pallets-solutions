import type { Metadata } from "next"
import ContactClient from "./client"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Salaar Pallet Solutions. Call, WhatsApp, email, or visit us in Karachi. We respond within 24 hours.",
  keywords: ["contact Salaar Pallet Solutions", "pallet supplier Karachi", "buy pallets Pakistan"],
}

export default function ContactPage() {
  return <ContactClient />
}
