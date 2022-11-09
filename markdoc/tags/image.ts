import { Image } from '../../components'

export const image = {
  tag: 'image',
  render: Image,
  attributes: {
    alt: { type: String, required: true },
    src: { type: String, required: true },
    attribution: { type: String, required: false },
    author: { type: String, required: false },
    link: { type: String, required: false },
    style: { required: false }
  }
}
