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

export const getServerSideProps = async (): Promise<ServerSideProps> => {
  const article = await findArticle('work')

  return { props: { article } }
}

interface IPageProps {
  article: Article
}

const Page: NextPage<IPageProps> = ({ article }) => (
  <SelectArticle article={article} />
)

export default Page
