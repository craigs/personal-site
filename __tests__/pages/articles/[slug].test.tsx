import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Article } from '../../../components'
import Page from '../../../pages/articles/[slug]'
import articles from './data/articles'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page article={articles[0]} />)
  const { root } = renderer

  expect(root.findByType(Article)).not.toBeNull()
})
