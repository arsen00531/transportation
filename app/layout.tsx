import type React from "react"
import "./globals.css"
import { Toaster } from "sonner"
import { ScrollToHashWithOffset } from "@/components/ui/scroll-to-hash-with-offset" // Импортируем новый компонент

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
      <body>
        <Toaster position="top-right" />
        {children}
        <ScrollToHashWithOffset /> {/* Добавляем компонент для прокрутки */}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
