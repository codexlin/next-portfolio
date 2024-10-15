import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codexlin.com"),

  title: "CodexLin",
  authors: {
    name: "CodexLin",
  },

  description:
    "I'm a Fullstack developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Daily Vote",
    description:
      "I'm a Fullstack developer passionate about building a modern web application that users love.",
    url: "https://codexlin.com",
    siteName: "CodexLin",
    images: "/og.png",
    type: "website",
  },
  keywords: ["codexlin", "CodexLin", "dailywebcoding"],
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
