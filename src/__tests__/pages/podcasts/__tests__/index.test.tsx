import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/podcasts'
import podcasts from './podcasts'

it('renders podcasts', async () => {
  const { getByText } = render(<Page podcasts={podcasts} />)

  expect(getByText(podcasts[0].title)).toBeDefined()
})
