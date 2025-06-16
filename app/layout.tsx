import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carla Harumi - Potfólio",
  description:
    "Como posso te ajudar? Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC. Entre em contato: +55 11 951085736",
  keywords: "social media, storyteller, videomaker mobile, florianópolis, marketing digital, carla harumi",
  authors: [{ name: "Carla Harumi" }],
  creator: "Carla Harumi",
  openGraph: {
    title: "Carla Harumi - Social Media | Storyteller | Videomaker Mobile",
    description:
      "Como posso te ajudar? Profissional de Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Harumi - Social Media | Storyteller | Videomaker Mobile",
    description:
      "Como posso te ajudar? Profissional de Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
