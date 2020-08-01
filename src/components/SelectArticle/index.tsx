import Head from 'next/head'
import React, { FC } from 'react'
import { Article, Layout } from '~components/index'
import { NotFound } from '~lib/NotFound'
import { IArticle } from '~typings/IArticle'

interface ISelectArticleProps {
  article: IArticle
}

export const SelectArticle: FC<ISelectArticleProps> = props => {
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
