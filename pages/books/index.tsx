import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Books, Layout, Loading } from '../../components'
import { BooksQuery } from '../../graphql/BooksQuery'
import { Api } from '../../lib/Api'

const Page = () => {
  const options = { client: Api }
  const { loading, error, data } = useQuery(BooksQuery, options)

  if (loading) return <Loading />
  if (error) return <div>Error :</div>

  const { books } = data

  return (
    <Layout>
      <Head>
        <title>Books, Audiobooks</title>
      </Head>

      <h1>Books</h1>
      <p>Recent books I have listened to and have gained insights from</p>

      <Books collection={books} />
    </Layout>
  )
}

export default Page
