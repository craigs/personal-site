import React, { FC } from 'react'

import Styles from './index.module.scss'

interface IImage {
  credit?: string
  image: {
    height: number
    width: number
    handle: string
  }
}

interface ICreditProps {
  contentImage: IImage
}

export const Credit: FC<ICreditProps> = ({ contentImage: { credit } }) => {
  if (!credit) return null

  return (
    <div
      className={Styles.container}
      dangerouslySetInnerHTML={{ __html: credit }}
    />
  )
}
