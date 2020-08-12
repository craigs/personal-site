import React from 'react'
import TestRenderer from 'react-test-renderer'
import contentImage from '../../../../fixtures/contentImage'
import { ContentImage } from '../index'

it('renders a ContentImage', () => {
  const renderer = TestRenderer.create(
    <ContentImage contentImage={contentImage} />
  )
  const { root } = renderer

  expect(root).not.toBeNull()
  expect(root.findByType('img')).not.toBeNull()
})
