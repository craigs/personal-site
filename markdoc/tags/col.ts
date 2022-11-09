import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Col } from '../../components'

export const col = {
  node: 'col',
  render: Col,
  attributes: {
    gap: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Markdoc.Tag('Col', attributes, children)
  }
}
