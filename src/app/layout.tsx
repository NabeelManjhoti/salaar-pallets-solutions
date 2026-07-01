import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat/chat-bot"

export const metadata: Metadata = {
  title: {
    default: "Salaar Pallet Solutions | Wooden & Plastic Pallets Supplier Karachi",
    template: "%s | Salaar Pallet Solutions",
  },
  description:
    "Karachi's trusted supplier of wooden pallets, plastic pallets, custom pallet manufacturing, and pallet repair services. Serving businesses across Pakistan.",
  keywords: [
    "wooden pallets",
    "plastic pallets",
    "pallet supplier Karachi",
    "pallet repair",
    "custom pallets",
    "buy pallets Pakistan",
    "pallet manufacturer",
  ],
  openGraph: {
    title: "Salaar Pallet Solutions | Wooden & Plastic Pallets Supplier Karachi",
    description:
      "Karachi's trusted supplier of wooden pallets, plastic pallets, custom pallet manufacturing, and pallet repair services.",
    type: "website",
    locale: "en_US",
    siteName: "Salaar Pallet Solutions",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
