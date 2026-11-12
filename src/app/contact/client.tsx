"use client"

import { useActionState } from "react"
import { submitContact } from "@/actions/inquiries"
import type { FormState } from "@/lib/definitions"
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"

const initialState: FormState = {}

const fieldMeta: Record<string, { label: string; placeholder: string }> = {
  name: { label: "Full Name *", placeholder: "Your full name" },
  email: { label: "Email Address *", placeholder: "corporate@company.com" },
  phone: { label: "Phone / WhatsApp *", placeholder: "03XX XXXXXXX" },
  company: { label: "Company / Factory Name", placeholder: "Enterprise name (optional)" },
  message: { label: "Specifications / Order Requirements *", placeholder: "Specify pallet dimensions (e.g. 1200×1000mm), estimated quantity, load capacity, or scrap buyback volume..." },
}

export default function ContactClient() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  return (
    <>
      <section className="bg-[var(--surface-alt)] border-b border-[var(--border)] py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-wider text-wood-600 dark:text-wood-400 mb-2 font-semibold">
              Commercial Quotations &amp; Factory Visits
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] mb-3">
              Contact Factory Operations
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Reach our Baldia Town manufacturing desk for immediate freight rates, technical timber specifications, or scheduling scrap pallet warehouse clearing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] mb-6">
                Submit Order or Buyback Request
              </h2>

              {state.success ? (
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <p className="font-medium text-sm">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-xs font-medium text-[var(--text)] mb-1">
                          {fieldMeta[field].label}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "text"}
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] outline-none focus:border-neutral-400 transition-colors"
                          placeholder={fieldMeta[field].placeholder}
                        />
                        {state.errors?.[field] && (
                          <p className="text-red-500 text-xs mt-1">{state.errors[field][0]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["phone", "company"].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-xs font-medium text-[var(--text)] mb-1">
                          {fieldMeta[field].label}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === "phone" ? "tel" : "text"}
                          required={field === "phone"}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] outline-none focus:border-neutral-400 transition-colors"
                          placeholder={fieldMeta[field].placeholder}
                        />
                        {state.errors?.[field] && (
                          <p className="text-red-500 text-xs mt-1">{state.errors[field][0]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-medium text-[var(--text)] mb-1">
                      Primary Service Requirement
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-neutral-400 transition-colors"
                    >
                      <option value="">Select requirement category</option>
                      <option value="wooden-pallets">New Wooden Pallets (1200×1000 or Euro)</option>
                      <option value="plastic-pallets">HDPE Plastic Skids &amp; Pallets</option>
                      <option value="custom-pallets">Custom Sizing / CAD Fabrication</option>
                      <option value="pallet-repair">On-Site Pallet Repair Service</option>
                      <option value="sell-pallets">Sell Surplus / Damaged Pallets</option>
                      <option value="other">General Freight Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[var(--text)] mb-1">
                      {fieldMeta.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] outline-none focus:border-neutral-400 transition-colors resize-none"
                      placeholder={fieldMeta.message.placeholder}
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>
                    )}
                  </div>

                  {state.message && !state.success && (
                    <p className="text-red-500 text-xs">{state.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-500 disabled:opacity-50 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    {pending ? (
                      <><Loader2 size={15} className="animate-spin" /> Submitting Inquiry...</>
                    ) : (
                      <><Send size={15} /> Submit Quotation Request</>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] mb-6">
                Factory &amp; Yard Details
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Direct Phone / WhatsApp", value: "0333 8538388", href: "tel:+923338538388" },
                  { icon: Mail, label: "Official Email", value: "nabeelalimanjhoti@gmail.com", href: "mailto:nabeelalimanjhoti@gmail.com" },
                  { icon: MapPin, label: "Yard Location", value: "Baldia Town 4/5, Timber Market, Karachi, Pakistan" },
                  { icon: Clock, label: "Factory Dispatch Hours", value: "Mon — Sun: 10:00 AM — 10:00 PM (PKT)" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)]">
                      <item.icon size={17} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[var(--text-secondary)] uppercase">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-xs sm:text-sm font-semibold text-[var(--text)] hover:text-wood-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-semibold text-[var(--text)]">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--border)] h-[240px]">
                <iframe
                  src="https://maps.google.com/maps?q=24.9080086,66.9642382&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salaar Pallet Solutions Baldia Town Yard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}