CREATE EXTENSION IF NOT EXISTS vector;

-- CreateTable
CREATE TABLE "ContentChunk" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT,
    "category" TEXT,
    "embedding" vector(3072),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentChunk_pkey" PRIMARY KEY ("id")
);

CREATE INDEX idx_content_chunk_embedding ON "ContentChunk" USING ivfflat ("embedding" vector_cosine_ops);
