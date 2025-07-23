import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carla Harumi - Portfólio",
  description:
    "Como posso te ajudar? Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC. Entre em contato: +55 11 951085736",
  keywords:
    "social media, storyteller, videomaker mobile, florianópolis, marketing digital, carla harumi",
  authors: [{ name: "Carla Harumi" }],
  creator: "Carla Harumi",
  openGraph: {
    title: "Carla Harumi - Portfólio",
    description:
      "Como posso te ajudar? Profissional de Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC",
    type: "website",
    locale: "pt_BR",
    images: "/images/metadata/profile-image2.webp",
    url: "https://harumimobile.com.br",
    siteName: "Carla Harumi - Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Harumi - Portfólio",
    description:
      "Como posso te ajudar? Profissional de Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC",
    images: ["/images/metadata/profile-image2.webp"],
  },
  metadataBase: new URL("https://harumimobile.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <meta property="og:site_name" content="Carla Harumi"></meta>
      <meta property="og:title" content={String(metadata?.openGraph?.title)} />
      <meta
        name="description"
        content={String(metadata?.openGraph?.description)}
      />
      <meta property="og:description" content={String(metadata?.openGraph?.description)} />
      <meta
        property="og:image"
        content={
          Array.isArray(metadata?.openGraph?.images)
            ? String(metadata.openGraph.images[0])
            : String(metadata?.openGraph?.images)
        }
      />
      <meta property="og:site_name" content={String(metadata?.openGraph?.siteName)} />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/images/favicon.ico" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
