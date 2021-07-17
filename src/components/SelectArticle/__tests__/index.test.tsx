import React from 'react'
import { render } from '@testing-library/react'

import article from '../../../fixtures/article'
import { SelectArticle } from '..'

it('renders an article', async () => {
  const { getByText } = render(<SelectArticle article={article} />)

  expect(getByText(article.title)).toBeDefined()
})
