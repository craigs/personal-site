import gql from 'graphql-tag'

export const ArticlesQuery = gql`
  query getArticles($category: String!) {
    articles(where: { category: $category }, orderBy: createdAt_DESC) {
      id
      slug
      teaser
      title
      coverImage {
        image {
          handle
          height
          width
        }
      }
    }
  }
`
