import type { Metadata } from "next"
import WoodenPalletsClient from "./client"

export const metadata: Metadata = {
  title: "New Wooden Pallets",
  description:
    "Premium quality wooden pallets for supply in Karachi and across Pakistan. ISPM 15 certified, custom sizes available. Reliable pallet supplier.",
  keywords: ["wooden pallets", "wood pallet supplier Karachi", "ISPM 15 pallets Pakistan", "buy wooden pallets"],
}

export default function WoodenPalletsPage() {
  return <WoodenPalletsClient />
}
