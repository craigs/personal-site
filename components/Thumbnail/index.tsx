import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Styles from './index.module.scss'

export type ThumbnailProps = {
  cover: any
  createdAt: string
  slug: string
  teaser: string
  title: string
}

export const Thumbnail: FC<ThumbnailProps> = ({
  cover,
  slug,
  createdAt,
  title,
  teaser

}) => (
  <div key={slug} className={Styles.container}>
    <Link href={`articles/${slug}`}>
      {cover && (
        <Image
          alt=''
          className={Styles.image}
          src={cover.src}
          width={300}
          height={150}
        />
      )}

      <h1 className={Styles.title}>{title}</h1>
      <p className={Styles.teaser}>{teaser}</p>
    </Link>
  </div>
)
