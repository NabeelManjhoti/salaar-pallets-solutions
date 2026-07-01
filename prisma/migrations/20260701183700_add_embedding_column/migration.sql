CREATE EXTENSION IF NOT EXISTS vector;

ALTER TABLE "ContentChunk" ADD COLUMN IF NOT EXISTS "embedding" vector(768);

CREATE INDEX IF NOT EXISTS idx_content_chunk_embedding ON "ContentChunk" USING ivfflat ("embedding" vector_cosine_ops);
