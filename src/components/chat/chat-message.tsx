"use client"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MessageSquare, ExternalLink } from "lucide-react"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[90%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed border ${
          isUser
            ? "bg-[#1d1f24] text-neutral-100 border-neutral-700"
            : "bg-[var(--surface-alt)] text-[var(--text)] border-[var(--border)]"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h3: ({ children }) => (
                <h3 className="font-semibold text-xs text-wood-600 dark:text-wood-400 mt-2 mb-1 uppercase tracking-wider">
                  {children}
                </h3>
              ),
              a: ({ href, children }) => {
                const isWhatsApp = href?.includes("wa.me")
                if (isWhatsApp) {
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 my-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] no-underline shadow-xs transition-colors"
                    >
                      <MessageSquare size={13} /> {children}
                    </a>
                  )
                }
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 underline text-wood-600 dark:text-wood-400 font-medium hover:text-wood-500 transition-colors"
                  >
                    {children} <ExternalLink size={10} className="inline ml-0.5" />
                  </a>
                )
              },
              ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 my-1.5">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 my-1.5">{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-[var(--text)]">{children}</strong>,
              code: ({ children }) => (
                <code className="font-mono text-[11px] bg-neutral-200/60 dark:bg-neutral-800 px-1 py-0.5 rounded text-[var(--text)]">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </Markdown>
        )}
      </div>
    </div>
  )
}