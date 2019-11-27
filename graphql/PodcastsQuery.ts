import gql from 'graphql-tag'

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
