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

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders podcasts', async () => {
  const renderer = TestRenderer.create(<Page podcasts={podcasts} />)
  const { root } = renderer

  expect(root.findByType(Podcasts)).not.toBeNull()
})
