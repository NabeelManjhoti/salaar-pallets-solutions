import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="font-mono text-3xl sm:text-4xl font-semibold text-neutral-400 mb-2">404</div>
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] mb-3">
        Specification Sheet Not Found
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 max-w-sm">
        The pallet catalog page or article you requested does not exist or has been relocated in our inventory.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors"
      >
        Return to Catalog
      </Link>
    </div>
  )
}