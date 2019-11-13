import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Article } from '../../index'
import { SelectArticle } from '../index'

import article from './data/article'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => article }))
jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<SelectArticle slug="work" />)
  const { root } = renderer

  expect(root.findByType(Article)).not.toBeNull()
})
