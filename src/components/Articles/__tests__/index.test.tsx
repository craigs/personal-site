import Link from 'next/link'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import article from '../../../fixtures/article'
import { Articles } from '../..'

it('renders a collection of articles', () => {
  const renderer = TestRenderer.create(<Articles collection={[article]} />)
  const { root } = renderer

  expect(root.findByType(Link)).not.toBeNull()
})
