import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import { Articles, Layout } from '~components/index'
import { ArticlesQuery } from '~graphql/ArticlesQuery'
import { Api } from '~lib/Api'
import { IArticle } from '~typings/IArticle'

interface IServerSideProps {
  props: {
    articles: IArticle[]
  }
}

export const getServerSideProps = async (): Promise<IServerSideProps> => {
  const category = 'article'

  const { data } = await Api.query({
    query: ArticlesQuery,
    variables: { category }
  })

  return { props: { ...data } }
}

interface IPageProps {
  articles: IArticle[]
}

const Page: NextPage<IPageProps> = ({ articles }) => (
  <Layout>
    <Head>
      <title>Articles</title>
    </Head>

    <Articles collection={articles} />
  </Layout>
)

export default Page
