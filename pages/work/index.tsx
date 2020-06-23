import React from 'react'
import { NextPage } from 'next'
import { SelectArticle } from '~components/index'
import { findArticle } from '~lib/findArticle'
import { IArticle } from '~typings/IArticle'

export const getServerSideProps = async () => {
  const article = await findArticle('work')

  return { props: { article } }
}

interface IPageProps {
  article: IArticle
}

const Page: NextPage<IPageProps> = ({ article }) => (
  <SelectArticle article={article} />
)

export default Page
