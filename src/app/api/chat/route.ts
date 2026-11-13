import { streamText, tool, createUIMessageStream, createUIMessageStreamResponse, type ModelMessage } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { NextResponse } from "next/server"
import { z } from "zod"
import { retrieveRelevantContext } from "@/lib/ai/rag"
import { rateLimit } from "@/lib/rate-limit"
import prisma from "@/lib/prisma"

export const maxDuration = 30

function getGeminiApiKey(): string | null {
  return (
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GEMINI_API_KEY ||
    null
  )
}

function generateDeterministicAnswer(query: string, contextChunks: { category: string | null; content: string }[]): string {
  const q = query.toLowerCase()

  // 1. WhatsApp / Price / Quote inquiry
  if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("quote") || q.includes("quotation")) {
    return `### Pallet Quotations & Factory Pricing

Because we manufacture pallets directly at our Baldia Town sawmill, our rates are mill-direct with zero broker markups:

- **Pricing Factors:** Dimensions (e.g. 1200×1000mm standard vs. Euro 1200×800mm), timber selection (Pakistani pine vs. hardwood), load capacity, order volume, and ISPM-15 heat-treatment certification.
- **Estimated Turnaround:** Commercial quotations are issued within 2 to 4 hours.
- **Immediate Quotation via WhatsApp:** Click below to send your quantity and dimensions directly to our factory dispatch desk:
  [Chat on WhatsApp (0333 8538388)](https://wa.me/923338538388?text=Hi%20Salaar%20Pallet%20Solutions!%20I%20need%20a%20quotation%20for%20pallets.)`
  }

  // 2. Selling / Scrap / Buyback inquiry
  if (q.includes("sell") || q.includes("buyback") || q.includes("scrap") || q.includes("old") || q.includes("damaged") || q.includes("broken")) {
    return `### Pallet Buyback & Warehouse Clearing

Salaar Pallet Solutions purchases surplus, used, and damaged pallets across Pakistan:

- **What We Purchase:**
  1. Functional used wooden and plastic pallets (1200×1000mm and Euro sizes).
  2. Broken or fractured wooden pallets for timber reconditioning and recycling.
  3. Cracked plastic skids purchased by polymer weight.
- **Free Karachi Transport:** Free flatbed truck pickup for bulk orders (50+ units) across SITE, Korangi, Landhi, Port Qasim, Hub, and North Karachi.
- **Get an Appraisal:** Send photos of your pallet stacks to WhatsApp:
  [Send Photos on WhatsApp (0333 8538388)](https://wa.me/923338538388?text=Hi%20Salaar%20Pallet%20Solutions!%20I%20have%20surplus/damaged%20pallets%20for%20sale.)`
  }

  // 3. Wooden pallets & Dimensions
  if (q.includes("wood") || q.includes("pine") || q.includes("size") || q.includes("dimension") || q.includes("ispm") || q.includes("heat")) {
    return `### Wooden Pallet Specifications

Our heavy-duty timber platforms are built for intense warehouse and export conditions:

- **Standard Dimensions:** 1200 × 1000 × 144 mm (Industrial standard) and 1200 × 800 × 144 mm (Euro spec). Custom dimensions available.
- **Material:** Kiln-dried Pakistani pine and dense structural hardwood.
- **Load Ratings:**
  - **Dynamic Payload:** 1,500 – 2,000 kg (active forklift handling).
  - **Static Payload:** 4,000 kg (warehouse stationary stacking).
  - **Racking Payload:** Up to 1,000 kg on open beams.
- **Forklift Access:** 4-way entry for forklifts and pallet jacks on all sides.
- **Export Certification:** 100% ISPM-15 compliant heat treatment (HT at 56°C core temperature for 30 min) with official IPPC stamping (PK-104) for smooth customs clearance.`
  }

  // 4. Plastic pallets & Hygiene
  if (q.includes("plastic") || q.includes("hdpe") || q.includes("hygienic") || q.includes("pharma") || q.includes("food")) {
    return `### Industrial HDPE Plastic Pallets

Engineered for sanitary supply chains requiring high chemical and temperature resistance:

- **Material:** High-density polyethylene (HDPE) or copolymer polypropylene.
- **Standard Sizes:** 1200 × 1000 mm and 1200 × 800 mm.
- **Temperature Range:** Operates from -20°C (cold storage and blast freezers) up to +60°C.
- **Payload Capacity:** 1,200 – 1,500 kg dynamic load, 4,500 kg static load.
- **Compliance:** 100% non-porous and washable for pharmaceutical GMP facilities and food processing. Completely exempt from ISPM-15 wood fumigation regulations.`
  }

  // 5. Location & Contact
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("phone") || q.includes("contact") || q.includes("hours")) {
    return `### Factory Location & Contact Info

- **Sawmill & Yard Address:** Baldia Town 4/5, Timber Market, Karachi, Pakistan.
- **Direct Phone / WhatsApp:** 0333 8538388 (+92 333 8538388)
- **Official Email:** nabeelalimanjhoti@gmail.com
- **Operating Hours:** Monday through Sunday, 10:00 AM – 10:00 PM (PKT).
- **Delivery Scope:** Daily deliveries across Karachi industrial estates with regular dedicated truckloads to Lahore, Faisalabad, Multan, and Port Qasim.`
  }

  // Fallback using retrieved RAG context chunks
  const contextSummary = contextChunks.map((c) => c.content).join("\n\n")
  return `### Salaar Technical Desk Assistance

Thank you for your inquiry regarding Salaar Pallet Solutions.

${contextSummary.slice(0, 500)}...

For technical drawings, CAD specifications, or immediate price calculations, connect directly with our mill dispatch manager:
- **Phone & WhatsApp:** [0333 8538388](https://wa.me/923338538388)
- **Email:** [nabeelalimanjhoti@gmail.com](mailto:nabeelalimanjhoti@gmail.com)
- **Factory:** Baldia Town 4/5, Timber Market, Karachi`
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    const { allowed, remaining } = rateLimit(`chat:${ip}`, 30, 60000)
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before sending another message.", remaining },
        { status: 429 }
      )
    }

    let body: { messages?: { role: string; content?: string; parts?: { type: string; text?: string }[] }[] }
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
    }

    const { messages } = body
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const lastText = lastMessage?.parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("")
      ?.trim()
    const lastContent = lastText || lastMessage?.content?.trim() || ""

    if (!lastContent || typeof lastContent !== "string") {
      return NextResponse.json({ error: "Invalid message content" }, { status: 400 })
    }

    const sanitizedQuery = lastContent.slice(0, 2000)

    // 1. RAG Retrieval from In-Memory Knowledge Base
    const contextChunks = await retrieveRelevantContext(sanitizedQuery, 3)
    const context = contextChunks.map((c) => `[${c.category?.toUpperCase() || "INFO"}] ${c.content}`).join("\n\n")

    // 2. Check for Gemini API Key
    const apiKey = getGeminiApiKey()

    // 3. Fallback execution if API key is not provisioned
    if (!apiKey) {
      const answer = generateDeterministicAnswer(sanitizedQuery, contextChunks)
      const stream = createUIMessageStream({
        execute: ({ writer }) => {
          writer.write({ type: "text-delta", id: "salaar-desk-msg", delta: answer })
        },
      })
      return createUIMessageStreamResponse({ stream })
    }

    // 4. Full Gemini LLM Execution with Tools
    const google = createGoogleGenerativeAI({ apiKey })

    const system = `You are Salaar Technical Desk, the professional AI assistant for Salaar Pallet Solutions, a premier industrial pallet manufacturer based in Baldia Town 4/5, Timber Market, Karachi, Pakistan.

Core Company Information:
- Location: Baldia Town 4/5, Timber Market, Karachi, Pakistan
- Hours: Mon-Sun 10:00 AM - 10:00 PM PKT
- Phone & WhatsApp: 0333 8538388
- Email: nabeelalimanjhoti@gmail.com
- Capabilities: New wooden pallets (standard 1200×1000mm & Euro 1200×800mm), HDPE plastic pallets, custom dimensions, pallet repairs, and surplus/damaged pallet buyback with free Karachi pickup.
- Certifications: Official ISPM-15 heat-treated export compliance (stamped PK-104 / HT / DB).

Response Guidelines:
- Be industrial, precise, helpful, and concise. No conversational fluff or emojis.
- Ground all facts, dimensions, and capacities strictly in the retrieved context below.
- Do NOT guess exact monetary prices; instead explain how dimensions and volume determine rates and provide a WhatsApp quote link or offer to record their inquiry.
- Use clean Markdown with bullet points for specifications.

Retrieved Context from Knowledge Base:
${context}`

    const modelMessages = messages.map((m) => {
      const role = m.role === "system" || m.role === "user" || m.role === "assistant" ? m.role : "user"
      const content =
        m.parts
          ?.filter((p) => p.type === "text")
          .map((p) => p.text ?? "")
          .join("") ?? m.content ?? ""
      return { role, content }
    })

    try {
      const result = streamText({
        model: google("gemini-1.5-flash"),
        system,
        messages: modelMessages as ModelMessage[],
        tools: {
          generateWhatsAppQuoteLink: tool({
            description: "Generate a pre-filled direct WhatsApp communication link for an instant pallet quotation.",
            inputSchema: z.object({
              palletType: z.string().describe("Pallet type e.g. Wooden 1200x1000, HDPE Plastic, Scrap Buyback"),
              quantity: z.string().optional().describe("Quantity needed or for sale"),
              destination: z.string().optional().describe("Delivery city or Karachi area"),
            }),
            execute: async ({ palletType, quantity, destination }) => {
              const text = encodeURIComponent(
                `Hi Salaar Pallet Solutions! I need a quote for: ${palletType}${quantity ? ` (${quantity} units)` : ""}${destination ? ` to ${destination}` : ""}.`
              )
              return {
                url: `https://wa.me/923338538388?text=${text}`,
                phone: "0333 8538388",
                message: `Click to chat directly with our dispatch manager on WhatsApp for ${palletType}.`,
              }
            },
          }),
          submitInquiry: tool({
            description: "Submit a customer quotation inquiry directly to the Salaar Pallet Solutions admin database.",
            inputSchema: z.object({
              name: z.string().describe("Customer's name"),
              phone: z.string().describe("Customer's phone or WhatsApp number"),
              email: z.string().optional().describe("Customer's email address"),
              serviceInterest: z.enum([
                "wooden-pallets",
                "plastic-pallets",
                "custom-pallets",
                "pallet-repair",
                "sell-pallets",
                "other",
              ]),
              message: z.string().describe("Order requirements, dimensions, and quantities"),
            }),
            execute: async ({ name, phone, email, serviceInterest, message }) => {
              try {
                const inquiry = await prisma.contactInquiry.create({
                  data: {
                    name,
                    phone,
                    email: email || "inquiry@chat.salaarpallets.com",
                    serviceInterest,
                    message: `[Inquiry via AI Chat]: ${message}`,
                  },
                })
                return {
                  success: true,
                  inquiryId: inquiry.id,
                  message: `Your inquiry for ${serviceInterest.replace("-", " ")} has been registered. Our Karachi team will contact you at ${phone}.`,
                }
              } catch {
                return {
                  success: false,
                  message: "Could not write to database directly. Please message on WhatsApp at 0333 8538388.",
                }
              }
            },
          }),
        },
      })

      return result.toUIMessageStreamResponse()
    } catch (llmErr) {
      console.warn("Gemini stream error, falling back to deterministic knowledge engine:", llmErr)
      const answer = generateDeterministicAnswer(sanitizedQuery, contextChunks)
      const stream = createUIMessageStream({
        execute: ({ writer }) => {
          writer.write({ type: "text-delta", id: "salaar-desk-msg", delta: answer })
        },
      })
      return createUIMessageStreamResponse({ stream })
    }
  } catch (error) {
    console.error("Chat API unhandled error:", error)
    return NextResponse.json({ error: "An internal error occurred" }, { status: 500 })
  }
}
