import { Img } from '../../components'

export const img = {
  tag: 'img',
  render: Img,
  attributes: {
    alt: { type: String, required: true },
    height: { type: Number, required: true },
    src: { type: String, required: true },
    width: { type: Number, required: true },
    top: { type: Number, required: false },
    position: { type: String, required: false }
  }
}
