"use client"

import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-wood-500 dark:hover:text-forest-400 mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            <span className="text-wood-500 dark:text-forest-400 font-medium">{post.category}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-wood-600 dark:text-wood-300 mb-8">
            {post.title}
          </h1>

          <article
            className="prose prose-wood dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </>
  )
}
