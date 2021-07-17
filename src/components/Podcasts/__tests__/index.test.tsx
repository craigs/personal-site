import { render } from '@testing-library/react'
import React from 'react'

import podcast from '../../../fixtures/podcast'
import { Podcasts } from '../..'

it('renders a collection of podcasts', () => {
  const { getByText } = render(<Podcasts collection={[podcast]} />)

  expect(getByText(podcast.author)).toBeDefined()
  expect(getByText(podcast.title)).toBeDefined()
})
