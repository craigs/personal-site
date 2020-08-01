import React from 'react'
import { NextPage } from 'next'
import { SelectArticle } from '~components/index'
import { findArticle } from '~lib/findArticle'
import { IArticle } from '~typings/IArticle'

interface IServerSideProps {
  props: {
    article: IArticle
  }
}

export const getServerSideProps = async (): Promise<IServerSideProps> => {
  const article = await findArticle('bio')
  return { props: { article } }
}

interface IPageProps {
  article: IArticle
}

const Page: NextPage<IPageProps> = ({ article }) => (
  <SelectArticle article={article} />
)

export default Page
