import { ArticleQuery } from '~graphql/ArticleQuery'
import { Api } from './Api'
import { IArticle } from '~typings/IArticle'

export const findArticle = async (
  slug: string | string[]
): Promise<IArticle> => {
  const { data } = await Api.query({
    query: ArticleQuery,
    variables: { slug }
  })

  return data?.article
}
