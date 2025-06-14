import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carla Harumi - Portfolio",
  description: "Portfolio pessoal de Carla Harumi",
  keywords: ["carla harumi"],
  authors: [{ name: "Carla Harumi" }],
  openGraph: {
    title: "Carla Harumi - Portfolio",
    description: "Portfolio pessoal de Carla Harumi",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
