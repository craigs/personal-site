import { render } from '@testing-library/react'
import React from 'react'

import Page from '../../../../pages/bio'
import bio from './bio'

it('renders an article', async () => {
  const { getByText } = render(<Page article={bio} />)

  expect(getByText(bio.title)).toBeDefined()
})
