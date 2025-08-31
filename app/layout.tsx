import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ScrollToHashWithOffset } from "@/components/ui/scroll-to-hash-with-offset"
import { gilroy } from "@/lib/fonts"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fulfillment-moscow.ru'

export const metadata: Metadata = {
  title: "Bunker - Фулфилмент услуги для маркетплейсов | Склад, упаковка, доставка",
  description:
    "Профессиональные фулфилмент услуги для Ozon, Wildberries и других маркетплейсов. Складские услуги, упаковка товаров, обработка заказов и доставка по всей России. Фулфилмент центр в Москве и Московской области.",
  keywords: [
    "фулфилмент",
    "фулфилмент услуги",
    "фулфилмент для маркетплейсов",
    "фулфилмент озон",
    "фулфилмент ozon",
    "фулфилмент wildberries",
    "фулфилмент вайлдберриз",
    "фулфилмент москва",
    "фулфилмент московская область",
    "фулфилмент россия",
    "складские услуги",
    "упаковка товаров",
    "обработка заказов",
    "логистика для маркетплейсов",
    "склад для интернет магазина",
    "фулфилмент центр",
    "аутсорсинг логистики",
    "3pl услуги",
    "складская логистика",
    "дропшиппинг",
    "кросс-докинг",
    "сборка заказов",
    "маркировка товаров",
    "инвентаризация",
    "возврат товаров",
  ],
  authors: [{ name: "Bunker Fulfillment" }],
  creator: "Bunker Fulfillment",
  publisher: "Bunker Fulfillment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Bunker Fulfillment",
    title: "Bunker - Фулфилмент услуги для маркетплейсов",
    description:
      "Профессиональные фулфилмент услуги для Ozon, Wildberries и других маркетплейсов. Складские услуги, упаковка товаров, обработка заказов и доставка по всей России.",
    images: [
      {
        url: "/images/bunker-logo-last.jpg",
        width: 1200,
        height: 630,
        alt: "Bunker Fulfillment - Фулфилмент услуги для маркетплейсов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunker - Фулфилмент услуги для маркетплейсов",
    description: "Профессиональные фулфилмент услуги для Ozon, Wildberries и других маркетплейсов.",
    images: ["/images/bunker-logo-last.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "android-chrome-192x192", url: "/favicons/android-chrome-192x192.png" }],
  },
  manifest: "/favicons/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "XXXXXXXX"}, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
            `,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
      </head>
      <body className={`${gilroy.variable} ${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <ScrollToTop />
          <ScrollToHashWithOffset />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
