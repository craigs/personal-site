import GraphImg from 'graphcms-image'
import React, { FC } from 'react'
import { Credit } from '../Credit'
import { ContentImage } from '~typings'

import Styles from './index.module.scss'

interface Props {
  contentImage: ContentImage
}

export const Cover: FC<Props> = ({ contentImage }) => {
  if (!contentImage) return null

  return (
    <div className={Styles.container}>
      <GraphImg
        backgroundColor={false}
        className={Styles.cover}
        fit="scale"
        image={contentImage.image}
        maxHeight={1500}
        withWebp={true}
      />

      <Credit contentImage={contentImage} />
    </div>
  )
}
