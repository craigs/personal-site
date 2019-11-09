import { useRouter } from 'next/router'
import { SelectArticle } from '../../../components'

const Page = () => {
  const { query } = useRouter()
  const { slug } = query

  return <SelectArticle slug={slug} />
}

export default Page
