import { useQuery } from '@apollo/react-hooks'
import Head from 'next/head'
import React from 'react'
import { Layout, Loading, Podcast } from '../../components'
import { PodcastsQuery } from '../../graphql/PodcastsQuery'
import { Api } from '../../lib/Api'

import Styles from './index.css'

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

      <div className={Styles.podcasts}>
        {podcasts.map(podcast => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </div>
    </Layout>
  )
}

export default Page
