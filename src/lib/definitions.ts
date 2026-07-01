import { z } from "zod/v4"

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
})

export type FormState = {
  errors?: Record<string, string[]>
  message?: string
  success?: boolean
}
