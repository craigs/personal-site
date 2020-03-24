import Link from 'next/link'
import React from 'react'

import Styles from './index.module.scss'

export const Articles = ({ collection }) => (
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
