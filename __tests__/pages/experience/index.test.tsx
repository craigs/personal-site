import React from 'react'
import TestRenderer from 'react-test-renderer'
import { SelectArticle } from '../../../components'
import Page from '../../../pages/experience'
import experience from './data/experience'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => experience }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page />)
  const { root } = renderer

  expect(root.findByType(SelectArticle)).not.toBeNull()
})
