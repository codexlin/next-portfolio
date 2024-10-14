import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codexlin.com"),

  title: "codexlin",
  authors: {
    name: "codexlin",
  },

  description:
    "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
  openGraph: {
    title: "Daily Vote",
    description:
      "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
    url: "https://codexlin.com",
    siteName: "codexlin",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "codexlin", "dailywebcoding"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
