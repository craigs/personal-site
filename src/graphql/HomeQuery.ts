import gql from 'graphql-tag'

export const HomeQuery = gql`
  query getHomeContent {
    articles(
      where: { category: "article" }
      first: 10
      orderBy: createdAt_DESC
    ) {
      coverImage {
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
      id
      slug
      teaser
      title
    }

    books(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      author
      id
      image {
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
            image: { resize: { width: 170, fit: scale } }
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
      link
      subtitle
      title
    }

    podcasts(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      author
      id
      image {
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
            image: { resize: { width: 66, fit: scale } }
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
      link
      title
    }
  }
`
