import React from 'react'
import { render } from '@testing-library/react'
import podcast from '../../../fixtures/podcast'
import { Podcast } from '../..'

it('renders a podcast', () => {
  const {getByText} = render(<Podcast {...podcast} />)

  expect(getByText(podcast.title)).toBeDefined()
})
