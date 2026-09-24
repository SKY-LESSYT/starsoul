import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import localFont from "next/font/local";

const fontRunholdy = localFont({
  src: "../src/fonts/majesty-rosaria-regular.woff2",
  variable: "--font-rosaria",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://starsoul.industries"),

  title: {
    default: "STARSOUL — Create: Aeronautics Minecraft SMP",
    template: "%s | STARSOUL",
  },

  description:
    "STARSOUL is a public modded SMP developed by SKY-LESS. Build factories, aircraft, railways, businesses, and more!",

  keywords: [
    "STARSOUL",
    "Minecraft SMP",
    "Minecraft server",
    "Create Aeronautics",
    "Create mod",
    "Minecraft modded server",
    "NeoForge",
    "Minecraft 1.21.1",
  ],

  authors: [{ name: "SKY-LESS" }],
  creator: "SKY-LESS",
  publisher: "SKY-LESS",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://starsoul.industries",
    siteName: "STARSOUL",
    title: "STARSOUL — Create: Aeronautics Minecraft SMP",
    description:
      "STARSOUL is a public modded SMP developed by SKY-LESS. Build factories, aircraft, railways, businesses, and more!",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "STARSOUL — Create: Aeronautics Minecraft SMP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "STARSOUL — Create: Aeronautics Minecraft SMP",
    description:
      "Build factories, aircraft, railways, businesses, and your own world on STARSOUL.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, fontRunholdy.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
