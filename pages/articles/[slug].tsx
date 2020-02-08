import React from 'react'
import { SelectArticle } from '../../components'
import { findArticle } from '../../lib/findArticle'

const Page = (props: any) => <SelectArticle {...props} />

Page.getInitialProps = async context => {
  const {
    query: { slug }
  } = context

  const article = await findArticle(slug)

  return { ...article }
}

export default Page
