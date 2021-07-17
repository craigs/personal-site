import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/books'
import books from './books'

it('renders books', async () => {
  const { getByText } = render(<Page books={books} />)

  expect(getByText(books[0].title)).toBeDefined()
})
