import React from 'react'
import { render } from '@testing-library/react'
import contentImage from '../../../../fixtures/contentImage'
import { Cover } from '..'

it('renders a Cover', () => {
  const { getByTestId } = render(<Cover contentImage={contentImage} />)

  expect(getByTestId('cover')).toBeDefined()
})
