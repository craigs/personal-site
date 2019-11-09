import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Loading } from '../index'

describe('Loading', () => {
  it('can be instantiated', () => {
    const instance = TestRenderer.create(<Loading />)

    expect(instance).not.toBeNull()
  })
})
