import { streamText, type ModelMessage } from "ai"
import { groq } from "@ai-sdk/groq"
import { NextResponse } from "next/server"
import { retrieveRelevantContext } from "@/lib/ai/rag"
import { rateLimit } from "@/lib/rate-limit"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    const { allowed, remaining } = rateLimit(`chat:${ip}`, 20, 60000)
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
    const lastContent = lastText || lastMessage?.content?.trim()

    if (!lastContent || typeof lastContent !== "string") {
      return NextResponse.json({ error: "Invalid message content" }, { status: 400 })
    }

    if (lastContent.length > 2000) {
      return NextResponse.json({ error: "Message too long (max 2000 characters)" }, { status: 400 })
    }

    const sanitizedQuery = lastContent.slice(0, 2000)

    let context = ""
    try {
      const contextChunks = await retrieveRelevantContext(sanitizedQuery, 3)
      context = contextChunks.map((c) => `[${c.category}] ${c.content}`).join("\n\n")
    } catch {
      context = ""
    }

    const system = `You are Salaar Assistant, the helpful AI assistant for Salaar Pallet Solutions. You represent a Karachi-based pallet supply, repair, and purchasing company.

Company details:
- Business: Salaar Pallet Solutions
- Location: Baldia Town 4/5, Timber Market, Karachi
- Hours: Mon-Sun 10AM-10PM
- Phone: 0333 8538388
- Email: nabeelalimanjhoti@gmail.com
- WhatsApp: 0333 8538388
- Services: New wooden pallets, new plastic pallets, custom pallet manufacturing, pallet repair, buying old/damaged pallets
- Founded: 5+ years ago
- Coverage: All Pakistan

Rules:
- Be friendly, professional, and concise
- Answer based on the retrieved context below
- If you don't know something, say so honestly and direct them to call or email
- Do NOT make up pricing — direct them to contact for quotes
- Always mention you can help them get a quote or connect via WhatsApp
- Keep answers brief and helpful

Relevant context from our website:
${context || "No specific context found. Answer based on your general knowledge of the company."}`

    const modelMessages = messages.map((m) => {
      const role = m.role === "system" || m.role === "user" || m.role === "assistant" ? m.role : "user"
      const content =
        m.parts
          ?.filter((p) => p.type === "text")
          .map((p) => p.text ?? "")
          .join("") ?? m.content ?? ""
      return { role, content }
    })

    const result = streamText({
      model: groq("llama-3.1-8b-instant"),
      system,
      messages: modelMessages as ModelMessage[],
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "An internal error occurred" }, { status: 500 })
  }
}
