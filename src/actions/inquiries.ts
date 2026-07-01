"use server"

import prisma from "@/lib/prisma"
import { ContactFormSchema, FormState } from "@/lib/definitions"

export async function submitContact(_prevState: FormState, formData: FormData): Promise<FormState> {
  const validated = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    serviceInterest: formData.get("serviceInterest"),
    message: formData.get("message"),
  })

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors }
  }

  try {
    await prisma.contactInquiry.create({
      data: validated.data,
    })
    return { success: true, message: "Thank you! We'll get back to you shortly." }
  } catch {
    return { message: "Something went wrong. Please try again." }
  }
}

export async function getInquiries() {
  try {
    return await prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    })
  } catch {
    return []
  }
}

export async function markAsRead(id: number) {
  try {
    await prisma.contactInquiry.update({
      where: { id },
      data: { isRead: true },
    })
  } catch {
    // silently fail
  }
}

export async function markAsReplied(id: number) {
  try {
    await prisma.contactInquiry.update({
      where: { id },
      data: { isReplied: true },
    })
  } catch {
    // silently fail
  }
}

export async function deleteInquiry(id: number) {
  try {
    await prisma.contactInquiry.delete({ where: { id } })
  } catch {
    // silently fail
  }
}
