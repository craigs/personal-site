import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Podcast } from '~typings'
import { Layout, Podcasts } from '~components'
import { PodcastsQuery } from '~graphql'
import { Api } from '~lib/Api'

interface ServerSideProps {
  props: {
    podcasts: Podcast[]
  }
}

export const getServerSideProps = async (): Promise<ServerSideProps> => {
  const { data } = await Api.query({ query: PodcastsQuery })

  return { props: { ...data } }
}

interface PageProps {
  podcasts: Podcast[]
}

const Page: NextPage<PageProps> = ({ podcasts }) => (
  <Layout>
    <Head>
      <title>Podcasts</title>
    </Head>

    <h1>Podcasts</h1>
    <p>Podcasts I subscribe to</p>

    <Podcasts collection={podcasts} />
  </Layout>
)

export default Page
