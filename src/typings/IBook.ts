import { IImage } from './IImage'

export interface IBook {
  id: number
  link: string
  image: IImage
  title: string
  subtitle: string
  author: string
}
