"use client"

import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text)] mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Guides
        </Link>

        <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mb-3">
          <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          <span className="font-mono text-wood-600 dark:text-wood-400 font-medium">{post.category}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text)] mb-8">
          {post.title}
        </h1>

        <article
          className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  )
}