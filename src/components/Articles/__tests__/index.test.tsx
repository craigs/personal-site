import Link from 'next/link'
import React from 'react'
import { render } from '@testing-library/react'
import article from '../../../fixtures/article'
import { Articles } from '../..'

it('renders a collection of articles', () => {
  const { getByText } = render(<Articles collection={[article]} />)

  expect(getByText(article.title)).toBeDefined()
})
