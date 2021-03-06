import React from 'react'
import TestRenderer from 'react-test-renderer'
import { SelectArticle } from '../../../components'
import Page from '../../../pages/bio'
import bio from './data/bio'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders an article', async () => {
  const renderer = TestRenderer.create(<Page article={bio} />)
  const { root } = renderer

  expect(root.findByType(SelectArticle)).not.toBeNull()
})
