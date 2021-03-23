import React from 'react'
import TestRenderer from 'react-test-renderer'
import contentImage from '../../../../fixtures/contentImage'
import { Credit } from '..'

it('renders a Credit', () => {
  const renderer = TestRenderer.create(<Credit contentImage={contentImage} />)
  const { root } = renderer

  const container = root.findByType('div')
  const content = container.props.dangerouslySetInnerHTML.__html

  expect(content).toBe(contentImage.credit)
})
