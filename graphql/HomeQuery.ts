import { gql } from 'apollo-boost'

export const HomeQuery = gql`
  query getHomeContent {
    articles(
      where: { category: "article" }
      first: 10
      orderBy: createdAt_DESC
    ) {
      id
      slug
      title
    }

    books(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      author
      id
      image {
        url
      }
      link
      subtitle
      title
    }

    podcasts(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      author
      id
      image {
        url
      }
      link
      title
    }
  }
`
