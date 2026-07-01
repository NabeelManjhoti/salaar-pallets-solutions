"use server"

import bcrypt from "bcryptjs"
import { headers } from "next/headers"
import prisma from "@/lib/prisma"
import { createSession, deleteSession } from "@/lib/session"
import { LoginSchema, FormState } from "@/lib/definitions"
import { rateLimit } from "@/lib/rate-limit"

export async function login(_prevState: FormState, formData: FormData): Promise<FormState> {
  const ip = (await headers()).get("x-forwarded-for") ?? "unknown"
  const { allowed, remaining } = rateLimit(`login:${ip}`, 5, 60000)

  if (!allowed) {
    return { message: `Too many attempts. Try again in ${Math.ceil(remaining / 1000)} seconds.` }
  }

  const validated = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors }
  }

  const { email, password } = validated.data

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { message: "Invalid email or password" }
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return { message: "Invalid email or password" }
  }

  await createSession(user.id, user.email, user.role)
  return { success: true }
}

export async function logout() {
  await deleteSession()
}
