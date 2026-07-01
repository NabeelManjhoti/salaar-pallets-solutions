"use client"

const suggestions = [
  "What products do you offer?",
  "Do you buy old/damaged pallets?",
  "Where are you located?",
  "How do I get a quote?",
  "What sizes do custom pallets come in?",
  "Do you deliver outside Karachi?",
]

interface SuggestedMessagesProps {
  onSelect: (message: string) => void
}

export default function SuggestedMessages({ onSelect }: SuggestedMessagesProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {suggestions.map((msg) => (
        <button
          key={msg}
          onClick={() => onSelect(msg)}
          className="rounded-full border border-wood-300 dark:border-wood-600 px-3 py-1.5 text-xs text-wood-700 dark:text-wood-300 hover:bg-wood-100 dark:hover:bg-wood-800 transition-all"
        >
          {msg}
        </button>
      ))}
    </div>
  )
}
