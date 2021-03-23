import React from 'react'
import TestRenderer from 'react-test-renderer'
import book from '../../../fixtures/book'
import { Book } from '../..'

it('renders a book', () => {
  const renderer = TestRenderer.create(<Book {...book} />)
  const { root } = renderer

  expect(root).not.toBeNull()
})
