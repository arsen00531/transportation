import type React from "react"
import "./globals.css"
import { Toaster } from "sonner"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"

// Перенесем metadata в отдельный файл или используем generateMetadata
// export const metadata: Metadata = {
//   title: "BUNKER - Фулфиллмент услуги",
//   description: "Надежный партнер в сфере фулфиллмента в России",
//   generator: "v0.dev",
// }

function ScrollToTop() {
  useScrollToTop()
  return null
}

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
        <ScrollToTop />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
