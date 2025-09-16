import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Utkarsh Singh | Dark Knight Developer",
  description: "Software Engineer Portfolio - ode",
  generator: "v0.app",
  keywords: ["Software Engineer", "Developer", "Portfolio", "Utkarsh Singh"],
  authors: [{ name: "Utkarsh Singh" }],
  openGraph: {
    title: "Utkarsh Singh | Dark Knight Developer",
    description: "Software Engineer Portfolio - Dark Knight of Code",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfairDisplay.variable} ${sourceSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
