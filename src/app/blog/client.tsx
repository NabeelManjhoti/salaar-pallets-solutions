"use client"

import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogClient() {
  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              Industry Knowledge &amp; Standards
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Pallet Engineering &amp; Logistics Guides
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Technical insights on ISPM-15 phytosanitary certifications, warehouse load ratings, timber drying standards, and industrial freight handling across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-wood-600 dark:text-wood-400 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-wood-600 dark:group-hover:text-wood-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--border)]/60 flex items-center gap-1 text-xs font-medium text-wood-600 dark:text-wood-400">
                  Read Technical Guide <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}