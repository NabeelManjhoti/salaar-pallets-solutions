import type { Metadata } from "next"
import CustomPalletsClient from "./client"

export const metadata: Metadata = {
  title: "Custom Pallet Manufacturing",
  description:
    "Need pallets in specific sizes? We manufacture custom wooden and plastic pallets to your exact specifications. Any size, any quantity.",
  keywords: ["custom pallets", "custom pallet sizes", "pallet manufacturer Karachi", "custom wooden pallets"],
}

export default function CustomPalletsPage() {
  return <CustomPalletsClient />
}
