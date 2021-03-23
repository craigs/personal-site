import gql from 'graphql-tag'

export const ArticleQuery = gql`
  query getArticle($slug: String) {
    article(where: { slug: $slug }) {
      coverImage {
        credit
        image {
          handle
          height
          width
        }
      }
      contents {
        id
        title
        content
        image {
          credit
          image {
            handle
            height
            width
          }
        }
      }
      id
      slug
      teaser
      title
    }
  }
`
