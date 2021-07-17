import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/work'
import work from './work'

it('renders an article', async () => {
  const { getByText } = render(<Page article={work} />)

  expect(getByText(work.title)).toBeDefined()
})
