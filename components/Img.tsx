import Image from 'next/image'
import { CSSProperties, FC } from 'react'

interface ImgProps extends CSSProperties {
  alt: string
  height: number
  src: string
  width: number
}

// eslint-disable-next-line jsx-a11y/alt-text
export const Img: FC<ImgProps> = ({
  alt,
  height,
  src,
  width,
  ...style
}) => (
  <Image
    alt={alt}
    height={height}
    width={width}
    src={src}
    style={style}
  />
)
