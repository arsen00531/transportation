import type React from "react"
import "./globals.css"
import { Toaster } from "sonner"
import { ScrollToHashWithOffset } from "@/components/ui/scroll-to-hash-with-offset"
import { gilroy } from "@/lib/fonts" // Импортируем шрифт Gilroy

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <title>BUNKER - Фулфиллмент услуги</title>
        <meta name="description" content="Надежный партнер в сфере фулфиллмента в России" />
      </head>
      <body className={`${gilroy.variable} font-gilroy`}>
        {" "}
        {/* Применяем шрифт Gilroy как основной */}
        <Toaster position="top-right" />
        {children}
        <ScrollToHashWithOffset />
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
