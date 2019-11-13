import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Layout } from '../../index'
import Sidebar from '../Sidebar'

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

it('renders a book', () => {
  const renderer = TestRenderer.create(
    <Layout>
      <p>sample content</p>
    </Layout>
  )
  const { root } = renderer

  expect(root).not.toBeNull()
  expect(root.findByType(Sidebar)).not.toBeNull()
})
