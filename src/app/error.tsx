"use client"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">System Error</div>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text)] mb-3">
        Unable to Load Specifications
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 max-w-sm">
        An unexpected error occurred while fetching pallet inventory. Please try reloading or contact our factory desk.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors"
      >
        Retry Request
      </button>
    </div>
  )
}