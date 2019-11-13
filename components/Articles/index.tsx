import Link from 'next/link'

import Styles from './index.css'

export const Articles = ({ collection }) => (
  <div className={Styles.articles}>
    {collection.map(article => (
      <div key={article.id}>
        <Link href={`articles/${article.slug}`}>
          <a>
            <h1>{article.title}</h1>
          </a>
        </Link>
      </div>
    ))}
  </div>
)
