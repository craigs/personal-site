import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Code } from '../../components'

export const code = {
  node: 'code',
  render: Code,
  attributes: {
    lang: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Markdoc.Tag('Code', attributes, children)
  }
}
