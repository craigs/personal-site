import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Styles from './index.module.scss'

export type BookProps = {
  author: string
  createdAt: string
  image: string
  link: string
  teaser: string
  title: string
}

export const Book: FC<BookProps> = ({
  author,
  createdAt,
  image,
  link,
  teaser,
  title
}) => (
  <div key={title} className={Styles.container}>
    <Link href={link}>
      <Image
        alt=''
        className={Styles.image}
        src={image}
        width={170}
        height={170}
      />

      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.author}>{author}</p>
      <p className={Styles.teaser}>{teaser}</p>
    </Link>
  </div>
)
