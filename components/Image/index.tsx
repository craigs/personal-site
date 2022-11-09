import NextImage from 'next/image'
import { CSSProperties, FC } from 'react'

import { Credit } from '../Credit'
import Styles from './index.module.scss'

export type ImageProps = {
  alt: string
  src: string
  attribution?: string
  author?: string
  link?: string
  style?: CSSProperties
}

export const Image: FC<ImageProps> = ({ alt, src, style, ...credit }) => {
  return (
    <>
      <NextImage
        alt={alt}
        width={700}
        height={200}
        src={src}
        className={Styles.cover}
        style={style}
      />

      {credit && <Credit {...credit} />}
    </>
  )
}
