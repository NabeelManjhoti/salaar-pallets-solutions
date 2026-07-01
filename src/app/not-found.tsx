import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-wood-500 mb-4">404</h1>
      <p className="text-lg text-[var(--text-secondary)] mb-6">Page not found</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
      >
        Go Home
      </Link>
    </div>
  )
}
