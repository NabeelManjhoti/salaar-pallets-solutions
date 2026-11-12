"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useEffect, useRef, useState, useCallback, type FormEvent } from "react"
import { X, MessageSquare, Loader2, Send } from "lucide-react"
import Image from "next/image"
import ChatMessage from "./chat-message"
import SuggestedMessages from "./suggested-messages"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [localInput, setLocalInput] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onFinish: () => setShowSuggestions(false),
  })

  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleSuggestion = useCallback(
    (msg: string) => {
      setShowSuggestions(false)
      sendMessage({ text: msg })
    },
    [sendMessage]
  )

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!localInput.trim() || isLoading) return
      setShowSuggestions(false)
      sendMessage({ text: localInput })
      setLocalInput("")
    },
    [localInput, isLoading, sendMessage]
  )

  const isEmpty = messages.length === 0

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#18191d] hover:bg-neutral-800 text-neutral-100 border border-neutral-700/80 shadow-lg transition-colors"
          aria-label="Open support chat"
        >
          <MessageSquare size={19} />
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs sm:bg-transparent" onClick={handleClose} />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Salaar Technical Assistant"
            className="relative z-10 w-full sm:w-[400px] h-[85vh] sm:h-[560px] bg-[var(--bg)] border border-[var(--border)] shadow-2xl flex flex-col rounded-t-xl sm:rounded-xl overflow-hidden"
          >
            {/* Quiet Industrial Header */}
            <div className="bg-[#141518] text-neutral-100 p-3.5 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/logo.png"
                  alt="Salaar Pallet Solutions"
                  width={24}
                  height={24}
                  className="rounded-xs"
                />
                <div>
                  <div className="text-xs font-semibold text-neutral-100 tracking-tight">Salaar Technical Desk</div>
                  <div className="text-[10px] text-neutral-400 font-mono">SPEC &amp; LOGISTICS ASSISTANT</div>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {isEmpty && (
                <ChatMessage
                  role="assistant"
                  content="Welcome to Salaar Pallet Solutions. Ask about standard 1200×1000mm specs, ISPM-15 export certification, load ratings, or scrap pallet buyback in Karachi."
                />
              )}

              {messages.map((m) => {
                const role = m.role === "user" || m.role === "assistant" ? m.role : "assistant"
                const text = m.parts
                  ? (m.parts as Array<{ type: string; text?: string }>)
                      .filter((p) => p.type === "text")
                      .map((p) => p.text ?? "")
                      .join("")
                  : ""
                return <ChatMessage key={m.id} role={role} content={text} />
              })}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] pl-2 py-1">
                  <Loader2 size={13} className="animate-spin" />
                  <span>Checking specifications...</span>
                </div>
              )}

              {error && (
                <div className="text-red-500 text-xs text-center p-2">
                  Unable to connect. Please message us directly via WhatsApp.
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {showSuggestions && isEmpty && <SuggestedMessages onSelect={handleSuggestion} />}

            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 p-3 border-t border-[var(--border)] bg-[var(--bg)]">
              <input
                type="text"
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                placeholder="Ask about specs, quotes, delivery..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--text-secondary)] outline-none focus:border-neutral-400 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !localInput.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wood-600 text-white hover:bg-wood-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send inquiry"
              >
                {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}