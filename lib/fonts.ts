import localFont from "next/font/local"

export const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
})
