import { render } from '@testing-library/react'
import React from 'react'

import podcast from '../../../fixtures/podcast'
import { Podcast } from '../..'

it('renders a podcast', () => {
  const { getByText } = render(<Podcast {...podcast} />)

  expect(getByText(podcast.title)).toBeDefined()
})
