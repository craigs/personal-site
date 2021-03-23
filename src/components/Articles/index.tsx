import Link from 'next/link'
import React, { FC } from 'react'
import { Article } from '~typings'
import GraphImg from 'graphcms-image'

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
              <GraphImg
                backgroundColor={false}
                className={Styles.cover}
                fit="scale"
                image={coverImage.image}
                withWebp={true}
              />
            )}

            <h1>{title}</h1>
            <p>{teaser}</p>
          </a>
        </Link>
      </div>
    ))}
  </div>
)
