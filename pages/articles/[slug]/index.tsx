import { useRouter } from 'next/router'
import { SelectArticle } from '../../../components'
import { findArticle } from '../../../lib/findArticle'

const Page = (props: any) => <SelectArticle {...props} />

Page.getInitialProps = async () => {
  const { query } = useRouter()
  const { slug } = query
  const article = await findArticle(slug)
  return { ...article }
}

export default Page
