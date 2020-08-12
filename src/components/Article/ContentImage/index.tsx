import GraphImg from 'graphcms-image'
import React, { FC } from 'react'
import { IContentImage } from '~typings/IContentImage'
import { Credit } from '../Credit'

import Styles from './index.module.scss'

interface IContentImageProps {
  contentImage: IContentImage
}

export const ContentImage: FC<IContentImageProps> = ({ contentImage }) => {
  const { image } = contentImage

  if (!image) return null

  return (
    <div className={Styles.container}>
      <GraphImg
        backgroundColor={false}
        className={Styles.cover}
        fit="scale"
        image={image}
        withWebp={true}
      />

      <Credit contentImage={contentImage} />
    </div>
  )
}
