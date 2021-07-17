import React from 'react'
import { render } from '@testing-library/react'
import contentImage from '../../../../fixtures/contentImage'
import { Credit } from '..'

it('renders a Credit', () => {
  const image = { ...contentImage, credit: 'credit line' }
  const { getByText } = render(<Credit contentImage={image} />)

  expect(getByText(image.credit)).toBeDefined()
})
