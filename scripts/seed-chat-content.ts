import { config } from "dotenv"
config()
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import crypto from "node:crypto"
import { generateEmbedding, chunkText } from "../src/lib/ai/embed"
import { blogPosts } from "../src/data/blog-posts"

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error("DATABASE_URL environment variable is not set")
  process.exit(1)
}

const adapter = new PrismaNeon({ connectionString: databaseUrl })
const prisma = new PrismaClient({ adapter })

interface ContentSource {
  slug: string
  category: string
  text: string
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

const contentSources: ContentSource[] = [
  {
    slug: "home-hero",
    category: "home",
    text: "Salaar Pallet Solutions is a Karachi-based trusted partner for wooden and plastic pallets. We offer premium quality pallets supply, custom manufacturing, repair services, and pallet purchasing across Pakistan. Contact us for a quote or view our products.",
  },
  {
    slug: "home-services",
    category: "home",
    text: "Salaar Pallet Solutions offers four main services: New Wooden Pallets - high-quality wooden pallets in standard and custom sizes, ISPM 15 certified, heat-treated, and built to last. New Plastic Pallets - durable, hygienic plastic pallets ideal for food, pharmaceutical, and clean-room environments. Custom Sizes - we manufacture pallets in any size and specification tailored to your requirements. Pallet Repair Service - professional repair services to extend pallet life with quick turnaround at competitive rates in Karachi.",
  },
  {
    slug: "home-why-us",
    category: "home",
    text: "Why choose Salaar Pallet Solutions? Premium Quality - all pallets meet industry standards with ISPM 15 certified wood and food-grade plastic options. All-Pakistan Delivery - based in Karachi, delivering to businesses across Pakistan with a fast, reliable logistics network. Custom Manufacturing - any size, any specification, we build pallets to match your exact requirements. 24/7 Support - dedicated customer support via WhatsApp, phone, and email.",
  },
  {
    slug: "home-buy-pallets",
    category: "home",
    text: "Salaar Pallet Solutions purchases new, old, and damaged wooden and plastic pallets across Pakistan. If you have surplus pallets, we will buy them at competitive rates with free pickup in Karachi. We accept new and surplus pallets, used but functional pallets, damaged pallets for recycling, and bulk quantities.",
  },
  {
    slug: "home-stats",
    category: "home",
    text: "Salaar Pallet Solutions has 5+ Years of experience, has supplied 10K+ Pallets, and has 100+ Happy Clients. We serve all of Pakistan including Karachi, Lahore, Islamabad, Faisalabad, Multan, Hyderabad, and beyond.",
  },
  {
    slug: "wooden-pallets",
    category: "products",
    text: "Salaar Pallet Solutions supplies high-quality wooden pallets for every industry. From standard warehouse pallets to custom sizes for specialized applications, we supply businesses across Pakistan with durable, reliable pallets. Features: made from premium quality Pakistani wood, standard and custom sizes available, high load capacity up to 2000 kg, repairable, recyclable, and eco-friendly. Specifications: material Hardwood/Softwood, sizes 48x40, 48x48, custom sizes, load capacity 500-2000 kg, heat-treated ISPM 15 certification. Applications: warehousing, logistics, export. Standard pallets in stock for immediate delivery across Karachi and Pakistan. ISPM 15 certified heat-treated pallets for international shipping compliance. Custom dimensions available.",
  },
  {
    slug: "plastic-pallets",
    category: "products",
    text: "Salaar Pallet Solutions supplies premium plastic pallets for industries that demand hygiene, consistency, and durability. Ideal for food processing, pharmaceuticals, and clean-room environments. Features: 100% waterproof and moisture resistant, withstands extreme temperatures from -20°C to 60°C, hygienic and easy to clean with no bacterial growth, long lifespan of 5-10 years, 100% recyclable. Specifications: material HDPE/PP, standard and custom sizes, load capacity 500-1500 kg, lightweight 10-25 kg. Applications: food, pharma, chemicals, cold storage. Food-grade FDA-approved materials safe for direct food contact. Smooth surfaces with no splinters ideal for clean rooms and GMP facilities. No ISPM 15 treatment needed, ready for international shipping.",
  },
  {
    slug: "custom-pallets",
    category: "products",
    text: "Salaar Pallet Solutions manufactures custom wooden and plastic pallets in any size, shape, or specification. Standard sizes do not fit every product. The process: 1. Tell us your requirements - share your product dimensions, weight, storage setup, and any special requirements. 2. We design the perfect pallet - our team creates a custom pallet design optimized for your specific needs. 3. Manufacturing and quality check - built with precision in our Karachi facility, every pallet inspected for quality. 4. Delivery across Pakistan - timely delivery to your location anywhere in Pakistan. Custom pallets improve space utilization, reduce shipping costs, and prevent product damage. Industries that benefit: manufacturing, food and beverage, pharmaceutical, and export businesses.",
  },
  {
    slug: "about",
    category: "about",
    text: "Based in Karachi at Baldia Town 4/5, Timber Market, Karachi, Salaar Pallet Solutions is a trusted provider of wooden pallets, plastic pallets, custom manufacturing, and pallet repair services across Pakistan. Founded with a mission to provide Pakistani businesses with reliable, high-quality pallets at competitive prices. We have grown to serve clients from small warehouses to large manufacturing facilities and export businesses. We offer a complete pallet lifecycle solution: new pallets supply (wooden and plastic), custom manufacturing, professional repair services, and purchasing of used/damaged pallets. Our mission: to be Pakistan's most trusted pallet partner delivering quality, reliability, and value. Our vision: to build a nationwide network making quality pallets accessible to every business in Pakistan. Our values: quality without compromise, integrity in every deal, service beyond expectations, relationships built on trust.",
  },
  {
    slug: "contact-info",
    category: "contact",
    text: "Contact Salaar Pallet Solutions: Phone 0333 8538388, Email nabeelalimanjhoti@gmail.com. Address: Baldia Town 4/5, Timber Market, Karachi. Business hours: Monday to Sunday, 10:00 AM to 10:00 PM. You can also reach us on WhatsApp at 0333 8538388. We serve all of Pakistan.",
  },
  ...blogPosts.map((post) => ({
    slug: `blog-${post.slug}`,
    category: "blog",
    text: `${post.title}: ${stripHtml(post.content)}`,
  })),
]

async function main() {
  console.log("Seeding chat content...")

  for (const source of contentSources) {
    const chunks = chunkText(source.text)
    for (const chunk of chunks) {
      const existing = await prisma.contentChunk.findFirst({
        where: { slug: source.slug, content: chunk },
      })
      if (existing) continue

      const embedding = await generateEmbedding(chunk)
      if (embedding === null) {
        console.warn(`  ⚠ skipping ${source.slug} — embedding failed`)
        continue
      }
      const embeddingStr = JSON.stringify(embedding)

      await prisma.$executeRawUnsafe(
        `INSERT INTO "ContentChunk" (id, content, slug, category, embedding, "createdAt")
         VALUES ($1, $2, $3, $4, $5::vector, NOW())`,
        crypto.randomUUID(),
        chunk,
        source.slug,
        source.category,
        embeddingStr
      )
    }
    console.log(`  ✓ ${source.slug}`)
  }

  console.log("Done! Chat content seeded successfully.")
}

main()
  .catch((e) => {
    console.error("Error seeding chat content:", e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
