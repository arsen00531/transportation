import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Toaster } from "@/components/ui/toaster"
import { gilroy } from "@/lib/fonts"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ScrollToHashWithOffset } from "@/components/ui/scroll-to-hash-with-offset"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "BUNKER - Фулфиллмент для маркетплейсов",
  description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "16x16 32x32" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/_last-big-logo.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/favicons/site.webmanifest",
  generator: "v0.dev",
  openGraph: {
    title: "BUNKER - Фулфиллмент для маркетплейсовв",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах",
    url: "https://fulfilment-moskov.ru",
    siteName: "BUNKER",
    images: [
      {
        url: "images/try-with-yellow.png", // Используйте абсолютный URL
        width: 1200,
        height: 630,
        alt: "BUNKER - Фулфиллмент для маркетплейсов",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUNKER - Фулфиллмент для маркетплейсову",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
    images: ["images/try-with-yellow.png"], // Абсолютный URL
  },
  other: {
    'google-site-verification': 'G-0E5T9PLRD7', // если нужно
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0E5T9PLRD7"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0E5T9PLRD7');
          `}
        </Script>
      </head>
      <body className={`${fontSans.variable} ${gilroy.variable} font-gilroy`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <ScrollToTop />
          <ScrollToHashWithOffset />
        </ThemeProvider>
      </body>
    </html>
  )
}
