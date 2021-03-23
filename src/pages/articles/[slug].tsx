import React from 'react'
import { NextPage } from 'next'
import { SelectArticle } from '~components'
import { findArticle } from '~lib/findArticle'
import { Article } from '~typings'

interface ServerSideProps {
  props: {
    article: Article
  }
}

interface Props {
  query: {
    slug: string
  }
}

export const getServerSideProps = async ({
  query: { slug }
}: Props): Promise<ServerSideProps> => {
  const article = await findArticle(slug)

  return { props: { article } }
}

interface PageProps {
  article: Article
}

const Page: NextPage<PageProps> = ({ article }) => (
  <SelectArticle article={article} />
)

export default Page
