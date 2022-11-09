import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Row } from '../../components'

export const row = {
  node: 'row',
  render: Row,
  attributes: {
    gap: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Markdoc.Tag('Row', attributes, children)
  }
}
