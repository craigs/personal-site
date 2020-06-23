import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { IPodcast } from '~typings/IPodcast'
import { Layout, Podcasts } from '~components/index'
import { PodcastsQuery } from '~graphql/PodcastsQuery'
import { Api } from '~lib/Api'

export const getServerSideProps = async () => {
  const { data } = await Api.query({ query: PodcastsQuery })

  return { props: { ...data } }
}

interface IPageProps {
  podcasts: IPodcast[]
}

const Page: NextPage<IPageProps> = ({ podcasts }) => (
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
