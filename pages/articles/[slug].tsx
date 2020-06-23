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

interface IProps {
  query: {
    slug: string
  }
}

export const getServerSideProps = async ({
  query: { slug }
}: IProps): Promise<IServerSideProps> => {
  const article = await findArticle(slug)

  return { props: { article } }
}

interface IPageProps {
  article: IArticle
}

const Page: NextPage<IPageProps> = ({ article }) => (
  <SelectArticle article={article} />
)

export default Page
