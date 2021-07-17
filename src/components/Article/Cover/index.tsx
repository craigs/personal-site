import Image from 'next/image';
import React, { FC } from 'react'
import { Credit } from '../Credit'
import { ContentImage } from '~typings'

import Styles from './index.module.scss'

interface Props {
  contentImage: ContentImage
}

export const Cover: FC<Props> = ({ contentImage }) => {
  if (!contentImage) return null
  const { image } = contentImage

  return (
    <div className={Styles.container}>
      <Image
        blurDataURL={image.blur}
        className={Styles.cover}
        height={image.height}
        placeholder="blur"
        src={image.url}
        width={image.width}
      />

      <Credit contentImage={contentImage} />
    </div>
  )
}
