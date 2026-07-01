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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-wood-600 dark:text-wood-300">Inquiries</h1>
            <p className="text-sm text-[var(--text-secondary)]">{inquiries.length} total inquiries</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-red-500 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3 max-h-[80vh] overflow-y-auto">
            {inquiries.length === 0 ? (
              <p className="text-[var(--text-secondary)] text-center py-12">No inquiries yet.</p>
            ) : (
              inquiries.map((inquiry) => (
                <button
                  key={inquiry.id}
                  onClick={() => setSelected(inquiry)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selected?.id === inquiry.id
                      ? "border-wood-300 dark:border-forest-600 bg-wood-50 dark:bg-forest-900/20"
                      : "border-[var(--border)] bg-[var(--bg)] hover:border-wood-200 dark:hover:border-forest-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      {inquiry.isRead ? (
                        <MailOpen size={14} className="text-[var(--text-secondary)]" />
                      ) : (
                        <Mail size={14} className="text-wood-500" />
                      )}
                      <span className="font-medium text-sm text-[var(--text)]">{inquiry.name}</span>
                    </div>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] truncate pl-6">{inquiry.message}</p>
                  <div className="flex gap-2 mt-2 pl-6">
                    {!inquiry.isRead && (
                      <span className="text-[10px] font-medium text-wood-500 bg-wood-100 dark:bg-forest-900 dark:text-forest-300 px-2 py-0.5 rounded-full">New</span>
                    )}
                    {inquiry.isReplied && (
                      <span className="text-[10px] font-medium text-forest-500 bg-forest-100 dark:bg-forest-900 dark:text-forest-300 px-2 py-0.5 rounded-full">Replied</span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 min-h-[400px]">
            {selected ? (
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-wood-600 dark:text-wood-300">{selected.name}</h2>
                    <p className="text-sm text-[var(--text-secondary)]">{selected.email} | {selected.phone}</p>
                    {selected.company && (
                      <p className="text-sm text-[var(--text-secondary)]">Company: {selected.company}</p>
                    )}
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {new Date(selected.createdAt).toLocaleString()}
                  </span>
                </div>

                {selected.serviceInterest && (
                  <div className="mb-4">
                    <span className="text-xs font-medium text-wood-500 dark:text-forest-400 uppercase tracking-wider">Interested In</span>
                    <p className="text-sm text-[var(--text)] capitalize">{selected.serviceInterest.replace("-", " ")}</p>
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-xs font-medium text-wood-500 dark:text-forest-400 uppercase tracking-wider">Message</span>
                  <p className="text-sm text-[var(--text)] mt-1 whitespace-pre-wrap">{selected.message}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {!selected.isRead && (
                    <button
                      onClick={() => handleMarkRead(selected.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300 hover:bg-wood-200 dark:hover:bg-forest-800 transition-all"
                    >
                      <MailOpen size={14} /> Mark as Read
                    </button>
                  )}
                  {!selected.isReplied && (
                    <button
                      onClick={() => handleMarkReplied(selected.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-forest-100 text-forest-600 dark:bg-forest-900 dark:text-forest-300 hover:bg-forest-200 dark:hover:bg-forest-800 transition-all"
                    >
                      <CheckCheck size={14} /> Mark as Replied
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-[var(--text-secondary)] text-sm">
                Select an inquiry to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
