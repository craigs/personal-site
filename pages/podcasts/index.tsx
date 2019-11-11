import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Layout, Loading, Podcasts } from '../../components'
import { PodcastsQuery } from '../../graphql/PodcastsQuery'
import { Api } from '../../lib/Api'

const Page = () => {
  const options = { client: Api }
  const { loading, error, data } = useQuery(PodcastsQuery, options)

  if (loading) return <Loading />
  if (error) return <div>Error :</div>

  const { podcasts } = data

  return (
    <Layout>
      <Head>
        <title>Podcasts</title>
      </Head>

      <h1>Podcasts</h1>
      <p>Podcasts I subscribe to</p>

      <Podcasts collection={podcasts} />
    </Layout>
  )
}

export default Page
