import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Books } from '../../../components'
import Page from '../../../pages/books'
import books from './data/books'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => books }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page />)
  const { root } = renderer

  expect(root.findByType(Books)).not.toBeNull()
})
