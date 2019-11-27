import Head from 'next/head'
import React from 'react'
import { Books, Layout } from '../../components'
import { BooksQuery } from '../../graphql/BooksQuery'
import { Api } from '../../lib/Api'

const Page = ({ books }) => (
  <Layout>
    <Head>
      <title>Books, Audiobooks</title>
    </Head>

    <h1>Books</h1>
    <p>Recent books I have listened to and have gained insights from</p>

    <Books collection={books} />
  </Layout>
)

Page.getInitialProps = async () => {
  const { data } = await Api.query({ query: BooksQuery })
  return { ...data }
}

export default Page
