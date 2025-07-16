import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ScrollToHashWithOffset } from "@/components/ui/scroll-to-hash-with-offset"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bunker - Фулфилмент услуги для маркетплейсов | Склад, упаковка, доставка",
  description:
    "Профессиональный фулфилмент для Ozon, Wildberries и других маркетплейсов. Фулфилмент Москва и область - склад, упаковка, доставка товаров. Работа с возвратами и полная автоматизация процессов.",
  keywords:
    "фулфилмент, фулфилмент озон, фулфилмент ozon, фулфилмент wildberries, фулфилмент для маркетплейсов, фулфилмент москва, фулфилмент россия, фулфилмент это простыми словами, фулфилмент для маркетплейсов цена, работа фулфилмент москва, склад фулфилмент, упаковка товаров, доставка заказов, обработка возвратов, автоматизация склада, логистика маркетплейсов",
  authors: [{ name: "Bunker Fulfillment" }],
  creator: "Bunker",
  publisher: "Bunker",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Bunker - Фулфилмент услуги для маркетплейсов",
    description:
      "Профессиональный фулфилмент для Ozon, Wildberries. Склад в Московской области, быстрая обработка заказов, работа с возвратами.",
    siteName: "Bunker Fulfillment",
    images: [
      {
        url: "https://fulfilment-moskov.ru/images/bunker-logo-last.jpg", // Используйте абсолютный URL
        width: 512,
        height: 561,
        alt: "BUNKER - Фулфиллмент услуги для маркетплейсов",
        type : "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunker - Фулфилмент услуги для маркетплейсов",
    description: "Профессиональный фулфилмент для Ozon, Wildberries. Склад в Московской области.",
    images: ["https://fulfilment-moskov.ru/images/bunker-logo-last.jpg"],
    type : "image/jpeg"
  },
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
  alternates: {
    canonical: "https://yourdomain.com",
  },
  other: {
    'google-site-verification': 'G-0E5T9PLRD7', // если нужно
    'yandex-verification': '908ceea3a54dc6a4', // пример
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="https://fulfilment-moskov.ru/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="https://fulfilment-moskov.ru/favicon.ico" type="image/x-icon" />
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          <ScrollToHashWithOffset />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
