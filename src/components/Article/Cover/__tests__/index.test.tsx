import React from 'react'
import TestRenderer from 'react-test-renderer'
import contentImage from '../../../../fixtures/contentImage'
import { Cover } from '..'

it('renders a Cover', () => {
  const renderer = TestRenderer.create(<Cover contentImage={contentImage} />)
  const { root } = renderer

  expect(root).not.toBeNull()
  expect(root.findByType('img')).not.toBeNull()
})
