import React from 'react'
import ReactMarkdown from 'react-markdown'
import TestRenderer from 'react-test-renderer'
import article from '../../../fixtures/article'
import { Article } from '../..'

it('renders an article', () => {
  const renderer = TestRenderer.create(<Article article={article} />)
  const { root } = renderer

  expect(root).not.toBeNull()
  expect(root.findByType(ReactMarkdown)).not.toBeNull()
})
