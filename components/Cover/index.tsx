import Image from 'next/image'
import { FC } from 'react'

import { Credit } from '../Credit'
import Styles from './index.module.scss'

export type CoverProps = {
  cover: any
}

export const Cover: FC<CoverProps> = ({ cover }) => {
  const { credit } = cover

  return (
    <>
      <Image
        alt=''
        width={930}
        height={400}
        src={cover.src}
        className={Styles.cover}
      />

      {credit && <Credit {...credit} />}
    </>
  )
}
