import React from 'react'
import { Spinner } from '../Spinner'

import Styles from './index.module.scss'

export const Loading = () => (
  <div className={Styles.loading}>
    <Spinner large="true" />
  </div>
)
