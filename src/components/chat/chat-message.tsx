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
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-forest-600 text-white rounded-br-sm"
            : "bg-wood-100 dark:bg-wood-800 text-[var(--text)] rounded-bl-sm"
        }`}
      >
        {isUser ? (
          <p>{content}</p>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-wood-600 dark:text-wood-300">
                  {children}
                </a>
              ),
              ul: ({ children }) => <ul className="list-disc pl-4 space-y-0.5">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-4 space-y-0.5">{children}</ol>,
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
