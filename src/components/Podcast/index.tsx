import React, { FC } from 'react'
import Image from 'next/image';
import { Podcast as PodcastInterface } from '~typings'

import Styles from './index.module.scss'

export const Podcast: FC<PodcastInterface> = ({
  link,
  image,
  title,
  author
}) => (
  <a href={link} className={Styles.podcast}>
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
    </div>
  </a>
)
