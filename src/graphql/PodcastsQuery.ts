import gql from 'graphql-tag'

export const PodcastsQuery = gql`
  query getPodcasts {
    podcasts(orderBy: title_ASC) {
      author
      id
      image {
        height
        width
        blur: url(
          transformation: {
            image: { resize: { width: 10, fit: scale } }
            document: { output: { format: webp } }
          }
        )
        thumbnail: url(
          transformation: {
            image: { resize: { width: 66, fit: scale } }
            document: { output: { format: webp } }
          }
        )
        url(transformation: { document: { output: { format: webp } } })
      }
      link
      title
    }
  }
`
