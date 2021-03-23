import { Content } from './Content'
import { ContentImage } from './ContentImage'

export interface Article {
  coverImage?: ContentImage
  id: string
  slug: string
  teaser?: string
  title: string
  contents: [Content]
}
