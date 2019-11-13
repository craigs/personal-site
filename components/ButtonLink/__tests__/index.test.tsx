import React from 'react'
import TestRenderer from 'react-test-renderer'
import { ButtonLink } from '../../index'

it('renders a book', () => {
  const renderer = TestRenderer.create(
    <ButtonLink label="podcasts" link="/podcasts" />
  )
  const { root } = renderer

  expect(root).not.toBeNull()
})
