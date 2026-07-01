-- Alter the embedding column to support 3072 dimensions (gemini-embedding-001)
DROP INDEX IF EXISTS idx_content_chunk_embedding;

ALTER TABLE "ContentChunk" ALTER COLUMN "embedding" TYPE vector(3072);
