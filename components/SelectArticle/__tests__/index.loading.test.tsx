import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Loading, SelectArticle } from '../../index'

const mock = {
  data: null,
  error: null,
  loading: true
}

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => mock }))

it('initially displays a spinner', () => {
  const renderer = TestRenderer.create(<SelectArticle slug="work" />)
  const { root } = renderer

  expect(root.findByType(Loading)).not.toBeNull()
})
