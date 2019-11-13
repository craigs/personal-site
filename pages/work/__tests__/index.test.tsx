import React from 'react'
import TestRenderer from 'react-test-renderer'
import { SelectArticle } from '../../../components'
import Page from '../index'
import work from './data/work'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => work }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page />)
  const { root } = renderer

  expect(root.findByType(SelectArticle)).not.toBeNull()
})