import React from 'react'
import { render } from '@testing-library/react'

import book from '../../../fixtures/book'
import { Book, Books } from '../..'

it('renders a collection of books', () => {
  const { getByText } = render(<Books collection={[book]} />)

  expect(getByText(book.title)).toBeDefined()
})
