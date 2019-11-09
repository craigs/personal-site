import { gql } from 'apollo-boost'

export const HomeQuery = gql`
  query getHomeContent {
    articles(
      where: { category: "article" }
      first: 10
      orderBy: createdAt_DESC
    ) {
      id
      title
      slug
    }

    books(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      image {
        url
      }
      title
      subtitle
      author
      link
    }

    podcasts(where: { featured: true }, orderBy: createdAt_DESC, first: 10) {
      image {
        url
      }
      title
      author
      link
    }
  }
`
