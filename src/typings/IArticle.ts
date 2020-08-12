import { IContent } from './IContent'
import { IContentImage } from './IContentImage'

export interface IArticle {
  coverImage?: IContentImage
  id: string
  slug: string
  teaser?: string
  title: string
  contents: [IContent]
}
