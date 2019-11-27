import Head from 'next/head'
import React from 'react'
import removeMd from 'remove-markdown'
import { Article, Layout } from '../../components'
import { NotFound } from '../../lib/NotFound'

export const SelectArticle = (props: any) => {
  const article = props.article || NotFound

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={removeMd(article.body)} />
      </Head>

      <Article {...article} />
    </Layout>
  )
}
