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
          height
          blur: url(
            transformation: {
              image: {
                resize: { width: 10, fit: scale }
              }
              document: { output: { format: webp } }
            }
          )
          thumbnail: url(
            transformation: {
              image: { resize: { width: 300, fit: scale } }
              document: { output: { format: webp } }
            }
          )
          url(
            transformation: {
              document: { output: { format: webp } }
            }
          )
          width
        }
      }
    }
  }
`
