import React from 'react'
import TestRenderer from 'react-test-renderer'
import article from '../../../fixtures/article'
import { Article } from '../../index'

it('renders an article', () => {
  const renderer = TestRenderer.create(<Article {...article} />)
  const { root } = renderer

  expect(root).not.toBeNull()
})
