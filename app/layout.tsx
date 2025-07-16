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
  title: "BUNKER - Фулфиллмент для маркетплейсов | Склад, упаковка, доставка",
  description:
    "Профессиональный фулфилмент для Ozon, Wildberries и других маркетплейсов. Фулфилмент Москва и область - склад, упаковка, доставка товаров. Работа с возвратами и полная автоматизация процессов.",
  keywords:
    "фулфилмент, фулфилмент озон, фулфилмент ozon, фулфилмент wildberries, фулфилмент для маркетплейсов, фулфилмент москва, фулфилмент россия, фулфилмент это простыми словами, фулфилмент для маркетплейсов цена, работа фулфилмент москва, склад фулфилмент, упаковка товаров, доставка заказов, обработка возвратов, автоматизация склада, логистика маркетплейсов",
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
    title: "BUNKER - Фулфиллмент для маркетплейсов",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах",
    url: "https://fulfilment-moskov.ru",
    siteName: "BUNKER",
    images: [
      {
        url: "https://fulfilment-moskov.ru/images/bunker-logo-last.jpg",
        width: 512,
        height: 561,
        alt: "BUNKER - Фулфиллмент для маркетплейсов",
        type: "image/jpeg",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUNKER - Фулфиллмент для маркетплейсов",
    description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
    images: ["https://fulfilment-moskov.ru/images/bunker-logo-last.jpg"],
  },
  other: {
    "google-site-verification": "G-0E5T9PLRD7",
    "yandex-verification": "908ceea3a54dc6a4",
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
        <link rel="icon" href="https://fulfilment-moskov.ru/favicon.svg" type="image/svg+xml" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0E5T9PLRD7" strategy="beforeInteractive" />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0E5T9PLRD7');
          `}
        </Script>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(103349890, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>
        {/* /Yandex.Metrika counter */}
      </head>
      <body className={`${fontSans.variable} ${gilroy.variable} font-gilroy`}>
        {/* Yandex.Metrika noscript */}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103349890" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika noscript */}
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
