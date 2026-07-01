"use client"

import { MessageCircle } from "lucide-react"

const phoneNumber = "923338538388"
const message = encodeURIComponent("Hi Salaar Pallet Solutions! I'd like to know more about your products and services.")

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
