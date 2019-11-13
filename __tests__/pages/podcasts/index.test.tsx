import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Podcasts } from '../../../components'
import Page from '../../../pages/podcasts'
import podcasts from './data/podcasts'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => podcasts }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page />)
  const { root } = renderer

  expect(root.findByType(Podcasts)).not.toBeNull()
})
