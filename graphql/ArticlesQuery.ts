import { gql } from 'apollo-boost'

export const ArticlesQuery = gql`
  query getArticles($category: String!) {
    articles(where: { category: $category }, orderBy: createdAt_DESC) {
      id
      title
      slug
    }
  }
`
