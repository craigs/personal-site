import React, { FC, ReactNode } from 'react'
import { Spinner } from '../Spinner'

import Styles from './index.module.scss'

export const Loading: FC<ReactNode> = () => (
  <div className={Styles.loading}>
    <Spinner large={true} />
  </div>
)
