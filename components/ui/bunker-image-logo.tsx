import type React from "react"
import Image from "next/image"

interface BunkerImageLogoProps extends React.ComponentProps<typeof Image> {
  width?: number
  height?: number
}

export default function BunkerImageLogo({ width = 102, height = 102, ...props }: BunkerImageLogoProps) {
  return (
    <Image
      src="/images/try-with-yellow.png" // Используем ваш новый PNG-логотип
      alt="BUNKER Logo"
      width={width}
      height={height}
      priority={true} // Устанавливаем fetchpriority="high" для логотипа
      style={{ objectFit: "contain" }} // Адаптивный стиль для контейнера
      {...props}
    />
  )
}
