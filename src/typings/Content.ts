import { Image } from './Image'

export interface Content {
  id: string
  title: string
  content: string
  image?: {
    credit?: string
    image: Image
  }
}
