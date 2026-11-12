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
    <div className="flex min-h-[75vh] items-center justify-center px-4">
      <div className="w-full max-w-sm p-6 sm:p-8 rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-sm">
        <div className="text-center mb-6">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text)] mb-3">
            <LogIn size={20} strokeWidth={1.75} />
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-[var(--text)]">Admin Console</h1>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">Salaar Internal Inquiry Management</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[var(--text)] mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-neutral-400 transition-colors"
              placeholder="admin@salaarpallets.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-[var(--text)] mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-neutral-400 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {state.message && (
            <p className="text-red-500 text-xs">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full inline-flex items-center justify-center gap-2 bg-wood-600 hover:bg-wood-500 disabled:opacity-50 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            {pending ? <><Loader2 size={15} className="animate-spin" /> Authenticating...</> : "Sign In to Console"}
          </button>
        </form>
      </div>
    </div>
  )
}