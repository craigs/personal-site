import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Articles } from '../../../components'
import Page from '../../../pages/articles'
import articles from './data/articles'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => articles }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page />)
  const { root } = renderer

  expect(root.findByType(Articles)).not.toBeNull()
})
