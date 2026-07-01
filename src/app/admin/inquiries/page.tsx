import { verifySession } from "@/lib/dal"
import AdminInquiriesClient from "./client"
import { getInquiries } from "@/actions/inquiries"

export const metadata = {
  title: "Inquiries — Admin",
  robots: { index: false, follow: false },
}

export default async function InquiriesPage() {
  await verifySession()
  const inquiries = await getInquiries()
  return <AdminInquiriesClient inquiries={inquiries} />
}
