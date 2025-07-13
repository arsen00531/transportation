import localFont from "next/font/local"

export const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Heavy.ttf",
      weight: "900", // Heavy
      style: "normal",
    },
  ],
  variable: "--font-gilroy", // CSS переменная для использования в Tailwind
  display: "swap",
})
