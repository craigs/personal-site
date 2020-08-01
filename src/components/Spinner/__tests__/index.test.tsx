import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Spinner } from '../index'

describe('Spinner', () => {
  it('can be instantiated', () => {
    const instance = TestRenderer.create(<Spinner />)

    expect(instance).not.toBeNull()
  })
})
