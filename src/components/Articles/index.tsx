import Link from 'next/link'
import React, { FC } from 'react'
import { Article } from '~typings'
import Image from 'next/image';

import Styles from './index.module.scss'

interface Props {
  collection: Article[]
}

export const Articles: FC<Props> = ({ collection }) => (
  <div className={Styles.articles}>
    {collection.map(({ id, slug, title, teaser, coverImage }) => (
      <div key={id}>
        <Link href="articles/[slug]" as={`articles/${slug}`}>
          <a>
            {coverImage && (
              <div className={Styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={coverImage.image.blur}
                  src={coverImage.image.thumbnail}
                  width={coverImage.image.width}
                  height={coverImage.image.height}
                />
              </div>
            )}

            <h1>{title}</h1>
            <p>{teaser}</p>
          </a>
        </Link>
      </div>
    ))}
  </div>
)
