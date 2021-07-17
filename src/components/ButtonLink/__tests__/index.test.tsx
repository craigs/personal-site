import React from 'react'
import { render } from '@testing-library/react'

import { ButtonLink } from '../..'

it('renders a button link', () => {
  const { getByText } = render(
    <ButtonLink as="/podcasts" label="podcasts" link="/podcasts" />
  )

  expect(getByText('podcasts')).toBeDefined()
})
