import GraphImg from 'graphcms-image'
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
