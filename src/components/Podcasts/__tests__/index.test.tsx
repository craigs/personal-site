import React from 'react'
import TestRenderer from 'react-test-renderer'
import podcast from '../../../fixtures/podcast'
import { Podcast, Podcasts } from '../..'

it('renders a collection of podcasts', () => {
  const renderer = TestRenderer.create(<Podcasts collection={[podcast]} />)
  const { root } = renderer

  expect(root.findByType(Podcast)).not.toBeNull()
})
