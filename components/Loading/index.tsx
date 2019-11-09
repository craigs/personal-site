import React from 'react'
import { Spinner } from '../Spinner'
import Styles from './index.css'

export const Loading = () => (
  <div className={Styles.loading}>
    <Spinner large="true" />
  </div>
)
