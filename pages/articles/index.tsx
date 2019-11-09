import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Layout, Loading } from '../../components'
import { ArticlesQuery } from '../../graphql/ArticlesQuery'
import { Api } from '../../lib/Api'

import Styles from './index.css'

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

      <div className={Styles.container}>
        {articles.map(article => (
          <div key={article.id}>
            <Link href={`articles/${article.slug}`}>
              <a>
                <h1>{article.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Page
