import React from 'react'
import { render } from '@testing-library/react'
import article from '../../../fixtures/article'
import { Article } from '../..'

it('renders an article', () => {
  const { getByText } = render(<Article article={article} />)

  expect(getByText(article.title)).toBeDefined()
})
