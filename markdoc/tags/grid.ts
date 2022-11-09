import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Grid } from '../../components'

export const grid = {
  node: 'grid',
  render: Grid,
  attributes: {
    gap: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Markdoc.Tag('Grid', attributes, children)
  }
}
