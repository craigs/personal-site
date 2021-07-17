import Image from 'next/image';
import React, { FC } from 'react'
import { ContentImage as ContentImageInterface } from '~typings'
import { Credit } from '../Credit'

import Styles from './index.module.scss'

interface Props {
  contentImage: ContentImageInterface
}

export const ContentImage: FC<Props> = ({ contentImage }) => {
  const { image } = contentImage

  if (!image) return null

  return (
    <div className={Styles.container}>
      <div className={Styles.cover}>
        <Image
          blurDataURL={image.blur}
          height={image.height}
          placeholder="blur"
          src={image.url}
          width={image.width}
        />
      </div>

      <Credit contentImage={contentImage} />
    </div>
  )
}
