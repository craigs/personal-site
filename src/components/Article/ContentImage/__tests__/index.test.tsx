import { render } from '@testing-library/react'
import React from 'react'

import contentImage from '../../../../fixtures/contentImage'
import { ContentImage } from '..'

it('renders a ContentImage', () => {
  const { getByRole } = render(<ContentImage contentImage={contentImage} />)

  expect(getByRole('img')).toBeDefined()
})
