import Head from 'next/head'
import React from 'react'
import removeMd from 'remove-markdown'
import sanitizeHtml from 'sanitize-html'
import { Article, Layout } from '../../components'
import { NotFound } from '../../lib/NotFound'

const sanitize = (description: string): string => {
  const stripped = sanitizeHtml(description)

  return removeMd(stripped)
}

export const SelectArticle = (props: any) => {
  const article = props.article || NotFound

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={sanitize(article.body)} />
      </Head>

      <Article {...article} />
    </Layout>
  )
}
