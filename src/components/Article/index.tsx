import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { IArticle } from '~typings/IArticle'
import { ContentImage } from './ContentImage'
import { Cover } from './Cover'
import Styles from './index.module.scss'

interface IArticleProps {
  article: IArticle
}

export const Article: FC<IArticleProps> = ({ article }) => {
  const { title, contents, coverImage } = article

  return (
    <>
      <div className={Styles.heading}>
        <h1>{title}</h1>
      </div>

      {coverImage && <Cover contentImage={coverImage} />}

      <div className={Styles.container}>
        {contents.map(({ content, id, image }) => (
          <div key={`contents-${id}`}>
            {image && <ContentImage contentImage={image} />}

            {content && (
              <div className={Styles.content}>
                <ReactMarkdown
                  key={`content-${id}`}
                  escapeHtml={false}
                  source={content}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
