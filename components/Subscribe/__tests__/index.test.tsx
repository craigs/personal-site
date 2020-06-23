import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Subscribe } from '../index'

describe('Subscribe', () => {
  it('can be instantiated', () => {
    const instance = TestRenderer.create(<Subscribe />)

    expect(instance).not.toBeNull()
  })
})
