import { render } from '@testing-library/react'
import React from 'react'

import book from '../../../fixtures/book'
import { Books } from '../..'

it('renders a collection of books', () => {
  const { getByText } = render(<Books collection={[book]} />)

  expect(getByText(book.title)).toBeDefined()
})
