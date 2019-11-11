import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Book, Layout, Loading, Podcast } from '../../components'
import { HomeQuery } from '../../graphql/HomeQuery'
import { Api } from '../../lib/Api'

import Styles from './index.css'

const Page = () => {
  const options = { client: Api }
  const { loading, error, data } = useQuery(HomeQuery, options)

  if (loading) return <Loading />
  if (error) return <div>Error :</div>

  const { articles, books, podcasts } = data

  return (
    <Layout>
      <Head>
        <title>craigs.io - welcome</title>
      </Head>

      <div className={Styles.articles}>
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

      <div className={Styles.section}>
        <h1>Books</h1>
        <p>Recent books I have listened to and have gained insights from</p>

        <div className={Styles.books}>
          {books.map(book => (
            <Book key={book.id} {...book} />
          ))}
        </div>
      </div>

      <div className={Styles.section}>
        <h1>Podcasts</h1>
        <p>
          The right selection of Podcasts is just the food a creative mind
          craves
        </p>

        <div className={Styles.podcasts}>
          {podcasts.map(podcast => (
            <Podcast key={podcast.id} {...podcast} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Page
