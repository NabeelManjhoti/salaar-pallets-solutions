import { KNOWLEDGE_BASE, type KnowledgeDocument } from "./knowledge-base"

export interface ChunkResult {
  id: string
  content: string
  slug: string | null
  category: string | null
  score?: number
}

const INTENT_SYNONYMS: Record<string, string[]> = {
  price: ["pricing", "cost", "rate", "quote", "quotation", "charges", "payment"],
  buyback: ["sell", "scrap", "broken", "used", "old", "damaged", "purchasing", "buy", "surplus"],
  wooden: ["wood", "timber", "pine", "hardwood", "plank", "stringer", "ispm", "heat"],
  plastic: ["hdpe", "polymer", "hygienic", "washable", "pharma", "clean", "waterproof"],
  custom: ["dimension", "dimensions", "size", "sizes", "measure", "drawing", "cad", "bespoke", "special"],
  company: ["location", "address", "phone", "contact", "whatsapp", "email", "hours", "where", "karachi", "baldia"],
  repair: ["fix", "recondition", "broken", "damaged", "maintenance", "refurbish"],
}

function expandQueryTokens(query: string): string[] {
  const normalized = query.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
  const rawTokens = normalized.split(/\s+/).filter((t) => t.length > 2)
  const expanded = new Set<string>(rawTokens)

  for (const token of rawTokens) {
    for (const [intent, synonyms] of Object.entries(INTENT_SYNONYMS)) {
      if (token === intent || synonyms.includes(token)) {
        expanded.add(intent)
        for (const syn of synonyms) {
          expanded.add(syn)
        }
      }
    }
  }

  return Array.from(expanded)
}

function scoreDocument(doc: KnowledgeDocument, queryTokens: string[], rawQuery: string): number {
  let score = 0
  const docLower = doc.content.toLowerCase()
  const titleLower = doc.title.toLowerCase()
  const rawQueryLower = rawQuery.toLowerCase().trim()

  // Exact phrase matching in title or content
  if (rawQueryLower.length > 4 && docLower.includes(rawQueryLower)) {
    score += 15
  }
  if (rawQueryLower.length > 4 && titleLower.includes(rawQueryLower)) {
    score += 20
  }

  // Token matching with category boosting
  for (const token of queryTokens) {
    // Title match
    if (titleLower.includes(token)) {
      score += 6
    }
    // Keyword tag match
    if (doc.keywords.some((kw) => kw.includes(token))) {
      score += 4
    }
    // Content frequency
    const regex = new RegExp(`\\b${token}\\b`, "gi")
    const matches = docLower.match(regex)
    if (matches) {
      score += Math.min(matches.length * 1.5, 8)
    }
  }

  return score
}

export async function retrieveRelevantContext(query: string, topK = 3): Promise<ChunkResult[]> {
  try {
    const tokens = expandQueryTokens(query)
    if (tokens.length === 0) {
      // Default to company overview & products
      return KNOWLEDGE_BASE.slice(0, topK).map((doc) => ({
        id: doc.id,
        content: doc.content,
        slug: doc.id,
        category: doc.category,
        score: 1,
      }))
    }

    const scored = KNOWLEDGE_BASE.map((doc) => ({
      id: doc.id,
      content: doc.content,
      slug: doc.id,
      category: doc.category,
      score: scoreDocument(doc, tokens, query),
    }))

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score)

    // Filter documents with positive score, or fallback to top items
    const relevant = scored.filter((item) => item.score > 0)
    const results = relevant.length > 0 ? relevant.slice(0, topK) : scored.slice(0, topK)

    return results
  } catch (error) {
    console.error("RAG in-memory retrieval failed:", error)
    return KNOWLEDGE_BASE.slice(0, topK).map((doc) => ({
      id: doc.id,
      content: doc.content,
      slug: doc.id,
      category: doc.category,
    }))
  }
}
