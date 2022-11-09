import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Note } from '../../components'

export const note = {
  tag: 'note',
  render: Note,
  attributes: {
    id: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)

    let children = node.transformChildren(config)

    if (children[0] && typeof children[0] === 'object') {
      // @ts-expect-error
      children = children[0].children
    }

    return new Markdoc.Tag('Note', attributes, children)
  }
}
