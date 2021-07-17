import { render } from '@testing-library/react'
import React from 'react'
import { Layout } from '../..'

it('renders the sidebar', () => {
  const text = 'sample content'

  const { getByTestId, getByText } = render(
    <Layout>
      <p>{text}</p>
    </Layout>
  )

  expect(getByTestId('sidebar')).toBeDefined()
  expect(getByText(text)).toBeDefined()
})
