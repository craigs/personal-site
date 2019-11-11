import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Articles, Layout, Loading } from '../../components'
import { ArticlesQuery } from '../../graphql/ArticlesQuery'
import { Api } from '../../lib/Api'

const Page = () => {
  const category = 'article'
  const options = { client: Api, variables: { category } }
  const { loading, error, data } = useQuery(ArticlesQuery, options)

  if (loading) return <Loading />
  if (error) return <div>Error :</div>

  const { articles } = data

  return (
    <Layout>
      <Head>
        <title>Articles</title>
      </Head>

      <Articles collection={articles} />
    </Layout>
  )
}

export default Page
