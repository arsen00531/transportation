import Image from "next/image"

interface BunkerImageLogoProps {
  className?: string
  width?: number
  height?: number
}

function BunkerImageLogo({ className, width = 102, height = 102 }: BunkerImageLogoProps) {
  return (
    <Image
      src="/images/try-with-yellow.png"
      alt="BUNKER Logo"
      width={width}
      height={height}
      className={className}
      priority // Логотип часто виден сразу, поэтому можно добавить priority
    />
  )
}

export default BunkerImageLogo
