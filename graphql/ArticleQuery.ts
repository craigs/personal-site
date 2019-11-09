import { gql } from 'apollo-boost'

export const ArticleQuery = gql`
  query getArticle($slug: String) {
    article(where: { slug: $slug }) {
      id
      title
      body
    }
  }
`
