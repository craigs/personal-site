import React, { FC } from 'react'
import Image from 'next/image';

import { Book as BookInterface } from '~typings'

import Styles from './index.module.scss'

export const Book: FC<BookInterface> = ({
  author,
  image,
  link,
  subtitle,
  title
}) => (
  <div className={Styles.book}>
    <a href={link} className={Styles.link}>
      <div className={Styles.image}>
        <Image
          blurDataURL={image.blur}
          height={image.height}
          placeholder="blur"
          src={image.thumbnail}
          width={image.width}
        />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        {subtitle && <h4>{subtitle}</h4>}
      </div>
    </a>
  </div>
)
