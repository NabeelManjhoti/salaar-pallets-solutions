import prisma from "@/lib/prisma"
import { generateEmbedding } from "./embed"

interface ChunkResult {
  id: string
  content: string
  slug: string | null
  category: string | null
}

export async function retrieveRelevantContext(query: string, topK = 3): Promise<ChunkResult[]> {
  try {
    const embedding = await generateEmbedding(query)

    if (embedding === null) {
      const rows: ChunkResult[] = await prisma.$queryRawUnsafe(
        `SELECT id, content, slug, category
         FROM "ContentChunk"
         WHERE embedding IS NOT NULL
         LIMIT $1`,
        topK * 3
      )
      return rows
    }

    const embeddingStr = `[${embedding.join(",")}]`

    const rows: ChunkResult[] = await prisma.$queryRawUnsafe(
      `SELECT id, content, slug, category
       FROM "ContentChunk"
       WHERE embedding IS NOT NULL
       ORDER BY embedding <-> $1::vector
       LIMIT $2`,
      embeddingStr,
      topK
    )

    return rows
  } catch (error) {
    console.error("RAG retrieval failed:", error)
    return []
  }
}
