import React from 'react'
import TestRenderer from 'react-test-renderer'
import { ButtonLink } from '../../index'

it('renders a button link', () => {
  const renderer = TestRenderer.create(
    <ButtonLink as="/podcasts" label="podcasts" link="/podcasts" />
  )
  const { root } = renderer

  expect(root).not.toBeNull()
})
