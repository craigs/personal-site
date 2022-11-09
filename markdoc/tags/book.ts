import { Book } from '../../components'

export const book = {
  tag: 'book',
  render: Book,
  attributes: {
    author: { type: String, required: true },
    createdAt: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    teaser: { type: String, required: true },
    title: { type: String, required: true },
  }
}
