"use client"

import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/actions/auth"
import type { FormState } from "@/lib/definitions"
import { LogIn, Loader2 } from "lucide-react"
import { useEffect } from "react"

const initialState: FormState = {}

export default function AdminLoginClient() {
  const router = useRouter()
  const [state, formAction, pending] = useActionState(login, initialState)

  useEffect(() => {
    if (state.success) {
      router.push("/admin/inquiries")
    }
  }, [state.success, router])

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-sm p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300 mb-3">
            <LogIn size={24} />
          </div>
          <h1 className="font-display text-xl font-bold text-wood-600 dark:text-wood-300">Admin Login</h1>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[var(--text)] mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500"
              placeholder="Enter password"
            />
          </div>

          {state.message && (
            <p className="text-red-500 text-sm">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full inline-flex items-center justify-center gap-2 bg-wood-600 hover:bg-wood-700 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-xl transition-all"
          >
            {pending ? <><Loader2 size={18} className="animate-spin" /> Logging in...</> : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}
