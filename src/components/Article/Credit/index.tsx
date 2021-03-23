import React, { FC } from 'react'

import Styles from './index.module.scss'
import { ContentImage } from '~typings'
interface Props {
  contentImage: ContentImage
}

export const Credit: FC<Props> = ({ contentImage: { credit } }) => {
  if (!credit) return null

  return (
    <div
      className={Styles.container}
      dangerouslySetInnerHTML={{ __html: credit }}
    />
  )
}
