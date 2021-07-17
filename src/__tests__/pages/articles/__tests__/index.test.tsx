import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/articles'
import articles from './articles'

it('renders articles', async () => {
  const { getByText } = render(<Page articles={articles} />)

  expect(getByText(articles[0].title)).toBeDefined()
})
