import React from 'react'
import TestRenderer from 'react-test-renderer'
import podcast from '../../../fixtures/podcast'
import { Podcast } from '../..'

it('renders a podcast', () => {
  const renderer = TestRenderer.create(<Podcast {...podcast} />)
  const { root } = renderer

  expect(root).not.toBeNull()
})
