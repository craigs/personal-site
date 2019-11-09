import { gql } from 'apollo-boost'

export const PodcastsQuery = gql`
  query getPodcasts {
    podcasts(where: { featured: true }, orderBy: title_ASC) {
      author
      image {
        url
      }
      link
      title
    }
  }
`
