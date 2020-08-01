import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { IArticle } from '~typings/IArticle'

import Styles from './index.module.scss'

interface IArticleProps {
  article: IArticle
}

export const Article: FC<IArticleProps> = ({ article }) => {
  const { title, body } = article

  return (
    <div className={Styles.container}>
      <h1>{title}</h1>
      <ReactMarkdown escapeHtml={false} source={body} />
    </div>
  )
}
