"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useEffect, useRef, useState, useCallback, type FormEvent } from "react"
import { X, BotMessageSquare, Loader2, Send } from "lucide-react"
import Image from "next/image"
import ChatMessage from "./chat-message"
import SuggestedMessages from "./suggested-messages"

const DISMISSED_KEY = "chatbot.dismissed"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [localInput, setLocalInput] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const didAutoOpen = useRef(false)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onFinish: () => setShowSuggestions(false),
  })

  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    if (typeof window === "undefined") return
    if (didAutoOpen.current) return
    const dismissed = sessionStorage.getItem(DISMISSED_KEY)
    if (dismissed) return

    const timer = setTimeout(() => {
      didAutoOpen.current = true
      setOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleClose = useCallback(() => {
    setOpen(false)
    try {
      sessionStorage.setItem(DISMISSED_KEY, "true")
    } catch {}
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
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-wood-600 text-white shadow-lg hover:bg-wood-700 hover:scale-110 hover:shadow-xl hover:shadow-wood-600/25 transition-all duration-300 animate-[shake_0.6s_ease-in-out_3s_infinite]"
          aria-label="Open chat"
        >
          <BotMessageSquare size={34} />
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Salaar Assistant"
            className="relative z-10 w-full sm:max-w-md mx-0 sm:mx-4 h-[90vh] sm:h-[600px] bg-[var(--bg)] border border-[var(--border)] shadow-2xl flex flex-col rounded-none sm:rounded-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200"
          >
            <div className="bg-gradient-to-r from-wood-600 to-forest-600 p-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Salaar Pallet Solutions"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-white font-semibold text-sm">Salaar Assistant</h3>
                <p className="text-white/70 text-xs">AI Assistant</p>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 transition"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {isEmpty && (
                <ChatMessage
                  role="assistant"
                  content="Hi there! Welcome to **Salaar Pallet Solutions**. I'm your virtual assistant. How can I help you today? 😊"
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
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] pl-2">
                  <Loader2 size={14} className="animate-spin" />
                  <span>Typing...</span>
                </div>
              )}

              {error && (
                <div className="text-red-500 text-sm text-center p-2">
                  Something went wrong. Please try again.
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
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !localInput.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wood-600 text-white hover:bg-wood-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
