import { gql } from 'apollo-boost'

export const PodcastsQuery = gql`
  query getPodcasts {
    podcasts(orderBy: title_ASC) {
      author
      id
      image {
        handle
        height
        width
      }
      link
      title
    }
  }
`
