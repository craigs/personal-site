import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Books, Layout } from '~components'
import { BooksQuery } from '~graphql'
import { Api } from '~lib/Api'
import { Book } from '~typings'

interface ServerSideProps {
  props: {
    books: Book[]
  }
}

export const getServerSideProps = async (): Promise<ServerSideProps> => {
  const { data } = await Api.query({ query: BooksQuery })

  return { props: { ...data } }
}

interface PageProps {
  books: Book[]
}

const Page: NextPage<PageProps> = ({ books }) => (
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
