import { ArticleQuery } from '../graphql/ArticleQuery'
import { Api } from './Api'

export const findArticle = async (slug: string | string[]) => {
  const { data } = await Api.query({
    query: ArticleQuery,
    variables: { slug }
  })

  return data
}
