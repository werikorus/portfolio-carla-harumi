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
    images: ["/images/profile-image2.webp"],
    url: "https://harumimobile.com.br",
    siteName: "Carla Harumi - Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Harumi - Portfólio",
    description:
      "Como posso te ajudar? Profissional de Social Media, Storyteller e Videomaker Mobile em Florianópolis - SC",
    images: ["/images/profile-image2.webp"],
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
      <title>{String(metadata?.openGraph?.title)}</title>
      <meta property="og:title" content={String(metadata?.openGraph?.title)} />
      <meta
        property="description"
        content={String(metadata?.openGraph?.description)}
      />
      <meta property="og:image" content={String(metadata?.openGraph?.images)} />
      <meta property="og:site_name" content="Carla Harumi - Potfólio" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.ico" />

      {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff"></meta> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
