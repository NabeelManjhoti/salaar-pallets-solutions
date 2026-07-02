"use client"

import { useActionState } from "react"
import { submitContact } from "@/actions/inquiries"
import type { FormState } from "@/lib/definitions"
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"

const initialState: FormState = {}

const fieldMeta: Record<string, { label: string; placeholder: string }> = {
  name: { label: "Full Name *", placeholder: "Your name" },
  email: { label: "Email Address *", placeholder: "your@email.com" },
  phone: { label: "Phone Number *", placeholder: "03XX XXXXXXX" },
  company: { label: "Company Name", placeholder: "Your company (optional)" },
  message: { label: "Message *", placeholder: "Tell us about your requirements..." },
}

export default function ContactClient() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  return (
    <>
      <section className="bg-gradient-to-br from-wood-50 to-wood-100 dark:from-wood-900/30 dark:to-forest-900/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-wood-600 dark:text-wood-300 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Ready to work with us? Give us a call, drop us a message, or fill out the form below.
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-wood-600 dark:text-wood-300 mb-6">
                Send Us a Message
              </h2>

              {state.success ? (
                <div className="p-6 rounded-2xl bg-forest-50 dark:bg-forest-900/20 border border-forest-200 dark:border-forest-800">
                  <p className="text-forest-700 dark:text-forest-300 font-medium">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-[var(--text)] mb-1.5">
                          {fieldMeta[field].label}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "text"}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500 transition-all"
                          placeholder={fieldMeta[field].placeholder}
                        />
                        {state.errors?.[field] && (
                          <p className="text-red-500 text-xs mt-1">{state.errors[field][0]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {["phone", "company"].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-[var(--text)] mb-1.5">
                          {fieldMeta[field].label}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === "phone" ? "tel" : "text"}
                          required={field === "phone"}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500 transition-all"
                          placeholder={fieldMeta[field].placeholder}
                        />
                        {state.errors?.[field] && (
                          <p className="text-red-500 text-xs mt-1">{state.errors[field][0]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      I&apos;m Interested In
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="wooden-pallets">New Wooden Pallets</option>
                      <option value="plastic-pallets">New Plastic Pallets</option>
                      <option value="custom-pallets">Custom Pallets</option>
                      <option value="pallet-repair">Pallet Repair Service</option>
                      <option value="sell-pallets">Sell Old/Damaged Pallets</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-wood-400 dark:focus:ring-forest-500 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>
                    )}
                  </div>

                  {state.message && !state.success && (
                    <p className="text-red-500 text-sm">{state.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    {pending ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-wood-600 dark:text-wood-300 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "0333 8538388", href: "tel:+923338538388" },
                  { icon: Mail, label: "Email", value: "nabeelalimanjhoti@gmail.com", href: "mailto:nabeelalimanjhoti@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Baldia Town 4/5, Timber Market, Karachi" },
                  { icon: Clock, label: "Hours", value: "Mon — Sun: 10:00 AM — 10:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wood-100 text-wood-600 dark:bg-forest-900 dark:text-forest-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-[var(--text)] hover:text-wood-600 dark:hover:text-forest-300 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium text-[var(--text)]">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--border)] h-[300px]">
                <iframe
                  src="https://maps.google.com/maps?q=24.9080086,66.9642382&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salaar Pallet Solutions Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
