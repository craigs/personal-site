import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import { Articles, Layout } from '~components'
import { ArticlesQuery } from '~graphql'
import { Api } from '~lib/Api'
import { Article } from '~typings'

interface ServerSideProps {
  props: {
    articles: Article[]
  }
}

export const getServerSideProps = async (): Promise<ServerSideProps> => {
  const category = 'article'

  const { data } = await Api.query({
    query: ArticlesQuery,
    variables: { category }
  })

  return { props: { ...data } }
}

interface PageProps {
  articles: Article[]
}

const Page: NextPage<PageProps> = ({ articles }) => (
  <Layout>
    <Head>
      <title>Articles</title>
    </Head>

    <Articles collection={articles} />
  </Layout>
)

export default Page
