import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/articles/[slug]'
import articles from './articles'

it('renders an article', async () => {
  const article = articles[0]
  const { getByText } = render(<Page article={article} />)

  expect(getByText(article.title)).toBeDefined()
})
