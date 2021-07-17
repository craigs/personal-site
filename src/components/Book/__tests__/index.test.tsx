import React from 'react'
import { render } from '@testing-library/react'
import book from '../../../fixtures/book'
import { Book } from '../..'

it('renders a book', () => {
  const { getByText } = render(<Book {...book} />)

  expect(getByText(book.title)).toBeDefined()
})
