import Link from 'next/link'
import React, { FC } from 'react'
import { IArticle } from '~typings/IArticle'

import Styles from './index.module.scss'

interface IArticlesProps {
  collection: IArticle[]
}

export const Articles: FC<IArticlesProps> = ({ collection }) => (
  <div className={Styles.articles}>
    {collection.map(article => (
      <div key={article.id}>
        <Link href="articles/[slug]" as={`articles/${article.slug}`}>
          <a>
            <h1>{article.title}</h1>
          </a>
        </Link>
      </div>
    ))}
  </div>
)
