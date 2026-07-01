"use client"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl font-bold text-wood-500 mb-4">Something went wrong</h1>
      <p className="text-[var(--text-secondary)] mb-6">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
      >
        Try Again
      </button>
    </div>
  )
}
