import type { Metadata } from "next"
import PlasticPalletsClient from "./client"

export const metadata: Metadata = {
  title: "New Plastic Pallets",
  description:
    "High-quality plastic pallets for supply in Karachi and Pakistan. Hygienic, durable, and long-lasting. Food-grade options available.",
  keywords: ["plastic pallets", "plastic pallet supplier Karachi", "food grade pallets Pakistan", "buy plastic pallets"],
}

export default function PlasticPalletsPage() {
  return <PlasticPalletsClient />
}
