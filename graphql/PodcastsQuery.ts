import { gql } from 'apollo-boost'

export const PodcastsQuery = gql`
  query getPodcasts {
    podcasts(orderBy: title_ASC) {
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
