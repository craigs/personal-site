import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Articles, Books, ButtonLink, Layout, Podcasts } from '~components'
import { HomeQuery } from '~graphql'
import { Api } from '~lib/Api'
import { Article, Book, Podcast } from '~typings'

import Styles from './index.module.scss'

interface ServerSideProps {
  props: {
    articles: Article[]
    books: Book[]
    podcasts: Podcast[]
  }
}

interface PageProps {
  articles: Article[]
  books: Book[]
  podcasts: Podcast[]
}

export const getServerSideProps = async (): Promise<ServerSideProps> => {
  const { data } = await Api.query({ query: HomeQuery })
  return { props: { ...data } }
}

const Page: NextPage<PageProps> = ({ articles, books, podcasts }) => (
  <Layout>
    <Head>
      <title>craigs.io - welcome</title>
    </Head>

    <Articles collection={articles} />

    <div className={Styles.section}>
      <hr />
      <h1>Books</h1>
      <p>Recent books I have listened to and have gained insights from</p>

      <Books collection={books} />
      <ButtonLink label="more books" as="/books" link="/books" />
    </div>

    <div className={Styles.section}>
      <hr />
      <h1>Podcasts</h1>
      <p>
        The right selection of Podcasts is just the food a creative mind craves
      </p>

      <Podcasts collection={podcasts} />
      <ButtonLink label="more podcasts" as="/podcasts" link="/podcasts" />
    </div>
  </Layout>
)

export default Page
