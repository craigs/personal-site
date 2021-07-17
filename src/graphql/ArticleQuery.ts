import gql from 'graphql-tag'

export const ArticleQuery = gql`
  query getArticle($slug: String) {
    article(where: { slug: $slug }) {
      coverImage {
        credit
        image {
          blur: url(
            transformation: {
              image: {
                resize: { width: 10, fit: scale }
              }
              document: { output: { format: webp } }
            }
          )
          url(
            transformation: {
              document: { output: { format: webp } }
            }
          )
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
            height
            blur: url(
              transformation: {
                image: {
                  resize: { width: 10, fit: scale }
                }
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
      id
      slug
      teaser
      title
    }
  }
`
