import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Article, Layout, Loading } from '../../components'
import { ArticleQuery } from '../../graphql/ArticleQuery'
import { Api } from '../../lib/Api'
import { NotFound } from '../../lib/NotFound'

export const SelectArticle = ({ slug }) => {
  const options = { client: Api, variables: { slug } }
  const { loading, error, data } = useQuery(ArticleQuery, options)

  if (loading) return <Loading />
  if (error) return <div>Error :</div>

  const article = data.article || NotFound

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>

      <Article {...article} />
    </Layout>
  )
}
