import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Articles, Layout } from '../../components'
import { ArticlesQuery } from '../../graphql/ArticlesQuery'
import { Api } from '../../lib/Api'

const Page = ({ articles }) => (
  <Layout>
    <Head>
      <title>Articles</title>
    </Head>

    <Articles collection={articles} />
  </Layout>
)

Page.getInitialProps = async () => {
  const category = 'article'

  const { data } = await Api.query({
    query: ArticlesQuery,
    variables: { category }
  })

  return { ...data }
}

export default Page
