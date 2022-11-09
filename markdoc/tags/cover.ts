import Markdoc, { Config, Node } from '@markdoc/markdoc'

import { Cover } from '../../components'

export const cover = {
  tag: 'cover',
  render: Cover,
  transform(node: Node, config: Config) {
    const children = node.transformChildren(config)
    const frontmatter = config?.variables?.markdoc.frontmatter

    return new Markdoc.Tag('Cover', { ...frontmatter }, children)
  }
}
