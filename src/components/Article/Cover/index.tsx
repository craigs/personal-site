import GraphImg from 'graphcms-image'
import React, { FC } from 'react'
import { Credit } from '../Credit'
import { IContentImage } from '~typings/IContentImage'

import Styles from './index.module.scss'

interface ICoverProps {
  contentImage: IContentImage
}

export const Cover: FC<ICoverProps> = ({ contentImage }) => {
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
