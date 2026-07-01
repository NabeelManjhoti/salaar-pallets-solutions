import type { Metadata } from "next"
import BlogClient from "./client"

export const metadata: Metadata = {
  title: "Blog — Pallet Industry Insights",
  description:
    "Read expert articles about wooden and plastic pallets, industry tips, buying guides, and maintenance advice from Salaar Pallet Solutions.",
  keywords: ["pallet blog", "pallet buying guide", "pallet maintenance", "wooden vs plastic pallets"],
}

export default function BlogPage() {
  return <BlogClient />
}
