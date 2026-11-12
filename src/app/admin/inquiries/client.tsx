"use client"

import { useState } from "react"
import { logout } from "@/actions/auth"
import { markAsRead, markAsReplied, deleteInquiry } from "@/actions/inquiries"
import { Mail, MailOpen, CheckCheck, Trash2, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

interface Inquiry {
  id: number
  name: string
  email: string
  phone: string
  company: string | null
  serviceInterest: string | null
  message: string
  isRead: boolean
  isReplied: boolean
  createdAt: Date
}

export default function AdminInquiriesClient({ inquiries: initial }: { inquiries: Inquiry[] }) {
  const [inquiries, setInquiries] = useState(initial)
  const [selected, setSelected] = useState<Inquiry | null>(null)
  const router = useRouter()

  async function handleMarkRead(id: number) {
    await markAsRead(id)
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, isRead: true } : i)))
  }

  async function handleMarkReplied(id: number) {
    await markAsReplied(id)
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, isReplied: true } : i)))
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this inquiry?")) return
    await deleteInquiry(id)
    setInquiries((prev) => prev.filter((i) => i.id !== id))
    if (selected?.id === id) setSelected(null)
  }

  async function handleLogout() {
    await logout()
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-[var(--surface-alt)]">
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)]">Commercial Inquiries</h1>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">{inquiries.length} total customer submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-red-500 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] transition-colors"
          >
            <LogOut size={14} /> Log out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto">
            {inquiries.length === 0 ? (
              <p className="text-[var(--text-secondary)] text-xs text-center py-12">No inquiries yet.</p>
            ) : (
              inquiries.map((inquiry) => (
                <button
                  key={inquiry.id}
                  onClick={() => setSelected(inquiry)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-colors ${
                    selected?.id === inquiry.id
                      ? "border-neutral-400 dark:border-neutral-600 bg-[var(--bg)] shadow-xs"
                      : "border-[var(--border)] bg-[var(--bg)] hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      {inquiry.isRead ? (
                        <MailOpen size={14} className="text-[var(--text-secondary)]" />
                      ) : (
                        <Mail size={14} className="text-wood-600" />
                      )}
                      <span className="font-semibold text-xs sm:text-sm text-[var(--text)]">{inquiry.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] truncate pl-5.5">{inquiry.message}</p>
                  <div className="flex gap-2 mt-2 pl-5.5">
                    {!inquiry.isRead && (
                      <span className="font-mono text-[10px] font-medium text-wood-700 dark:text-wood-300 bg-wood-100 dark:bg-wood-950 px-1.5 py-0.5 rounded border border-wood-200 dark:border-wood-800">
                        NEW
                      </span>
                    )}
                    {inquiry.isReplied && (
                      <span className="font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        REPLIED
                      </span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          <div className="lg:col-span-7 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 min-h-[450px]">
            {selected ? (
              <div>
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-[var(--border)]">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-[var(--text)]">{selected.name}</h2>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{selected.email} · {selected.phone}</p>
                    {selected.company && (
                      <p className="text-xs text-[var(--text)] font-medium mt-1">Company: {selected.company}</p>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                    {new Date(selected.createdAt).toLocaleString()}
                  </span>
                </div>

                {selected.serviceInterest && (
                  <div className="mb-4">
                    <span className="font-mono text-[11px] text-[var(--text-secondary)] uppercase">Requirement Category</span>
                    <p className="text-xs sm:text-sm text-[var(--text)] font-medium capitalize mt-0.5">
                      {selected.serviceInterest.replace("-", " ")}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <span className="font-mono text-[11px] text-[var(--text-secondary)] uppercase">Client Message</span>
                  <p className="text-xs sm:text-sm text-[var(--text)] mt-1 whitespace-pre-wrap leading-relaxed p-3.5 rounded-lg bg-[var(--surface-alt)] border border-[var(--border)] font-mono">
                    {selected.message}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {!selected.isRead && (
                    <button
                      onClick={() => handleMarkRead(selected.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] hover:bg-[var(--bg)] transition-colors"
                    >
                      <MailOpen size={13} /> Mark Read
                    </button>
                  )}
                  {!selected.isReplied && (
                    <button
                      onClick={() => handleMarkReplied(selected.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                    >
                      <CheckCheck size={13} /> Mark Replied
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-[var(--text-secondary)] text-xs">
                Select an inquiry from the queue to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}