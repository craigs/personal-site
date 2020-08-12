import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import {
  Articles,
  Books,
  ButtonLink,
  Layout,
  Podcasts
} from '~components/index'
import { HomeQuery } from '~graphql/HomeQuery'
import { Api } from '~lib/Api'
import { IArticle } from '~typings/IArticle'
import { IBook } from '~typings/IBook'
import { IPodcast } from '~typings/IPodcast'

import Styles from './index.module.scss'

interface IServerSideProps {
  props: {
    articles: IArticle[]
    books: IBook[]
    podcasts: IPodcast[]
  }
}

interface IPageProps {
  articles: IArticle[]
  books: IBook[]
  podcasts: IPodcast[]
}

export const getServerSideProps = async (): Promise<IServerSideProps> => {
  const { data } = await Api.query({ query: HomeQuery })
  return { props: { ...data } }
}

const Page: NextPage<IPageProps> = ({ articles, books, podcasts }) => (
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
