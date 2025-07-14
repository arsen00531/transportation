import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Toaster } from "@/components/ui/toaster"
import { gilroy } from "@/lib/fonts"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "BUNKER - Фулфиллмент для маркетплейсов",
  description: "Надёжный партнёр по фулфилменту в России — для выгодной и стабильной работы на маркетплейсах.",
  icons: {
    icon: "/favicon.ico", // Добавляем ваш favicon
  },
    generator: 'v0.dev'
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
        </ThemeProvider>
      </body>
    </html>
  )
}
