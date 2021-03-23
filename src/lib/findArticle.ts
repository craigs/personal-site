import { ArticleQuery } from '~graphql'
import { Api } from './Api'
import { Article } from '~typings'

export const findArticle = async (
  slug: string | string[]
): Promise<Article> => {
  const { data } = await Api.query({
    query: ArticleQuery,
    variables: { slug }
  })

  return data?.article
}
