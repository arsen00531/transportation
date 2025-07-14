import type React from "react"
import Image from "next/image"

interface BunkerImageLogoProps extends Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> {
  width?: number
  height?: number
}

export default function BunkerImageLogo({ width = 102, height = 102, ...props }: BunkerImageLogoProps) {
  return (
    <Image
      src="/images/try-with-yellow.png"
      alt="BUNKER Logo"
      width={width}
      height={height}
      priority={true}
      style={{ objectFit: "contain", scale: ".7" }}
      {...props}
    />
  )
}
