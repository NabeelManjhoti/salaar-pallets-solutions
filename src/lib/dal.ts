import "server-only"
import { getSession } from "./session"
import { redirect } from "next/navigation"

export async function verifySession() {
  const session = await getSession()
  if (!session?.userId) {
    redirect("/admin/login")
  }
  return { userId: session.userId as number, email: session.email as string, role: session.role as string }
}
