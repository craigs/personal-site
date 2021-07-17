import gql from 'graphql-tag'

export const BooksQuery = gql`
  query getBooks {
    books(orderBy: title_ASC) {
      author
      id
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
            image: { resize: { width: 170, fit: scale } }
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
      link
      subtitle
      title
    }
  }
`
