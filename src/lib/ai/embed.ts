import { embed } from "ai"
import { google } from "@ai-sdk/google"

export async function generateEmbedding(text: string): Promise<number[] | null> {
  try {
    const { embedding } = await embed({
      model: google.embedding("gemini-embedding-001"),
      value: text,
    })
    return embedding as number[]
  } catch (error) {
    console.error("Embedding generation failed:", error)
    return null
  }
}

export function chunkText(text: string, maxLength = 500): string[] {
  const chunks: string[] = []
  let current = ""

  for (const token of text.split(/(?<=[.!?])\s+/)) {
    if ((current + token).length > maxLength && current) {
      chunks.push(current.trim())
      current = token
    } else {
      current += (current ? " " : "") + token
    }
  }

  if (current.trim()) chunks.push(current.trim())

  if (chunks.length === 0 && text.trim()) {
    while (text.length > maxLength) {
      chunks.push(text.slice(0, maxLength).trim())
      text = text.slice(maxLength)
    }
    if (text.trim()) chunks.push(text.trim())
  }

  return chunks
}
