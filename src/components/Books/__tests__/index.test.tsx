import React from 'react'
import TestRenderer from 'react-test-renderer'
import book from '../../../fixtures/book'
import { Book, Books } from '../../index'

it('renders a collection of books', () => {
  const renderer = TestRenderer.create(<Books collection={[book]} />)
  const { root } = renderer

  expect(root.findByType(Book)).not.toBeNull()
})
