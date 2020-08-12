export interface IContent {
  id: string
  title: string
  content: string
  image?: {
    credit?: string
    image: {
      handle: string
      height: number
      width: number
    }
  }
}
