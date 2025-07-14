import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
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
      { url: "/favicon.ico" }, // Стандартный favicon
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // Оптимизированный размер
      { url: "/images/favicon-192x192.png", sizes: "192x192", type: "image/png" }, // Для Android Chrome
      { url: "/images/favicon-512x512.png", sizes: "512x512", type: "image/png" }, // Для более крупных иконок
    ],
    apple: { url: "/images/favicon-180x180.png", sizes: "180x180", type: "image/png" }, // Apple Touch Icon
  },
  generator: "v0.dev",
  openGraph: {
    title: "BUNKER - Фулфиллмент для маркетплейсов",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
    url: "https://fulfilment-moskov.ru", // Замените на ваш реальный домен
    siteName: "BUNKER",
    images: [
      {
        url: "/images/try-with-yellow.png", // Путь к вашему логотипу для Open Graph (здесь большой размер уместен)
        width: 1200,
        height: 630,
        alt: "BUNKER Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUNKER - Фулфиллмент для маркетплейсов",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
    images: ["/images/try-with-yellow.png"], // Путь к вашему логотипу для Twitter (здесь большой размер уместен)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
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
