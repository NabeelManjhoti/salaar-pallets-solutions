"use client"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2.5`}>
      <div
        className={`max-w-[88%] rounded-lg px-3 py-2 text-xs leading-relaxed border ${
          isUser
            ? "bg-[#1d1f24] text-neutral-100 border-neutral-700"
            : "bg-[var(--surface-alt)] text-[var(--text)] border-[var(--border)]"
        }`}
      >
        {isUser ? (
          <p>{content}</p>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-wood-600 dark:text-wood-400 font-medium">
                  {children}
                </a>
              ),
              ul: ({ children }) => <ul className="list-disc pl-4 space-y-0.5 my-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-4 space-y-0.5 my-1">{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            }}
          >
            {content}
          </Markdown>
        )}
      </div>
    </div>
  )
}