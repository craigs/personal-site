import React from 'react'
import { SelectArticle } from '../../components'
import { findArticle } from '../../lib/findArticle'

const Page = (props: any) => <SelectArticle {...props} />

Page.getInitialProps = async () => {
  const article = await findArticle('bio')
  return { ...article }
}

export default Page
