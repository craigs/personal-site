import { Image } from './Image'

export interface Book {
  id: string
  link: string
  image: Image
  title: string
  subtitle?: string
  author: string
}
