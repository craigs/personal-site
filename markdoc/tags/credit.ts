import { Credit } from '../../components'

export const credit = {
  tag: 'credit',
  render: Credit,
  attributes: {
    attribution: { type: String, required: false },
    author: { type: String, required: false },
    link: { type: String, required: false },
  }
}
