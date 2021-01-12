import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Books, Layout } from '~components/index'
import { BooksQuery } from '~graphql'
import { Api } from '~lib/Api'
import { IBook } from '~typings/IBook'

interface IServerSideProps {
  props: {
    books: IBook[]
  }
}

export const getServerSideProps = async (): Promise<IServerSideProps> => {
  const { data } = await Api.query({ query: BooksQuery })

  return { props: { ...data } }
}

interface IPageProps {
  books: IBook[]
}

const Page: NextPage<IPageProps> = ({ books }) => (
  <Layout>
    <Head>
      <title>Books, Audiobooks</title>
    </Head>

    <h1>Books</h1>
    <p>Recent books I have listened to and have gained insights from</p>

    <Books collection={books} />
  </Layout>
)

export default Page
