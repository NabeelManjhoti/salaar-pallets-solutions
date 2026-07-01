"use client"

import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogClient() {
  return (
    <>
      <section className="bg-gradient-to-br from-wood-50 to-wood-100 dark:from-wood-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Insights, guides, and tips about wooden and plastic pallets. Stay informed
              with the latest from Salaar Pallet Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-wood-300 dark:hover:border-forest-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <div className="text-xs font-medium text-wood-500 dark:text-forest-400 mb-2 uppercase tracking-wider">
                  {post.category}
                </div>
                <h2 className="font-display text-lg font-semibold text-wood-600 dark:text-wood-300 mb-2 group-hover:text-wood-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-wood-500 dark:text-forest-400 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
