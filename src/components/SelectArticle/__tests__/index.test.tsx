import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Article } from '../..'
import { SelectArticle } from '..'

import article from '../../../fixtures/article'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<SelectArticle article={article} />)
  const { root } = renderer

  expect(root.findByType(Article)).not.toBeNull()
})
