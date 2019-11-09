import { gql } from 'apollo-boost'

export const BooksQuery = gql`
  query getBooks {
    books(where: { featured: true }, orderBy: title_ASC) {
      author
      subtitle
      image {
        url
      }
      link
      title
    }
  }
`
