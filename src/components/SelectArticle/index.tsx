import Head from 'next/head'
import React, { FC } from 'react'
import { Article, Layout } from '~components'
import { NotFound } from '~lib/NotFound'
import { Article as ArticleInterface } from '~typings'

interface SelectArticleProps {
  article: ArticleInterface
}

export const SelectArticle: FC<SelectArticleProps> = props => {
  const { article } = props
  const selected = article || NotFound
  const { title, teaser } = selected

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={teaser} />
      </Head>

      <Article article={selected} />
    </Layout>
  )
}
