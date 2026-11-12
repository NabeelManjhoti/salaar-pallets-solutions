"use client"

const suggestions = [
  "Standard pallet dimensions & pricing",
  "ISPM-15 export certification process",
  "Selling surplus / scrap pallets",
  "Karachi delivery & transport rates",
]

interface SuggestedMessagesProps {
  onSelect: (message: string) => void
}

export default function SuggestedMessages({ onSelect }: SuggestedMessagesProps) {
  return (
    <div className="flex flex-wrap gap-1.5 px-4 pb-3">
      {suggestions.map((msg) => (
        <button
          key={msg}
          onClick={() => onSelect(msg)}
          className="rounded-md border border-[var(--border)] bg-[var(--surface-alt)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-neutral-400 transition-colors text-left"
        >
          {msg}
        </button>
      ))}
    </div>
  )
}