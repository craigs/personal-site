import { gql } from 'apollo-boost'

export const BooksQuery = gql`
  query getBooks {
    books(orderBy: title_ASC) {
      author
      id
      image {
        handle
        height
        width
      }
      link
      subtitle
      title
    }
  }
`
