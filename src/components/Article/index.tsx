import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Article as ArticleInterface } from '~typings'
import { ContentImage } from './ContentImage'
import { Cover } from './Cover'
import Styles from './index.module.scss'

interface Props {
  article: ArticleInterface
}

export const Article: FC<Props> = ({ article }) => {
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
                  rehypePlugins={[rehypeRaw]}
                  skipHtml={false}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
