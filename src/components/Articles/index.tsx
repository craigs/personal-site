import Link from 'next/link'
import React, { FC } from 'react'
import { IArticle } from '~typings/IArticle'
import GraphImg from 'graphcms-image'

import Styles from './index.module.scss'

interface IArticlesProps {
  collection: IArticle[]
}

export const Articles: FC<IArticlesProps> = ({ collection }) => (
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
