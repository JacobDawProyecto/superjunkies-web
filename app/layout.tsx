import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Superjunkies — Electrónica indie desde 2004 | SuperjunkieJack",
  description:
    "Web oficial de Superjunkies (Jacob y Adrián). Los 10 temas de SoundCloud: remixes, edits y mixtapes. Electrónica independiente, NosotrosmismosRECordings. Booking: superjunkiesdjs@gmail.com",
  keywords: [
    "Superjunkies",
    "SuperjunkieJack",
    "electrónica indie",
    "remix",
    "SoundCloud",
    "NosotrosmismosRECordings",
    "DJ",
  ],
  authors: [{ name: "Superjunkies" }],
  openGraph: {
    title: "SUPERJUNKIES — Electrónica indie desde 2004",
    description:
      "Escucha los 10 temas: Back To 80's remix, Yellow edit, Apparat remix, Poppies Mixtape y más.",
    url: "https://soundcloud.com/superjunkies",
    siteName: "Superjunkies",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://i1.sndcdn.com/avatars-BzsNAYSDyQacfxyN-3qm4Xw-t1080x1080.jpg",
        width: 1080,
        height: 1080,
        alt: "Superjunkies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUPERJUNKIES — Electrónica indie desde 2004",
    description: "Todos los temas de SoundCloud en una web. Remixes, edits y mixtapes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Superjunkies",
              alternateName: "SuperjunkieJack",
              genre: ["Electronic", "Indie", "Remix"],
              foundingDate: "2004",
              email: "superjunkiesdjs@gmail.com",
              sameAs: [
                "https://soundcloud.com/superjunkies",
                "https://www.facebook.com/SUPERJUNKIESDJS",
                "https://www.instagram.com/superjunkiejack/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
