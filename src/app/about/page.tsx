import type { Metadata } from "next"
import AboutClient from "./client"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Salaar Pallet Solutions — Karachi-based suppliers of wooden and plastic pallets. Our mission, team, and commitment to quality.",
  keywords: ["about Salaar Pallet Solutions", "pallet company Karachi", "pallet supplier Pakistan"],
}

export default function AboutPage() {
  return <AboutClient />
}
