import React, { FC, ReactNode } from 'react'
import Links from './Links'
import Social from './Social'

import Styles from './index.module.scss'

const Sidebar: FC<ReactNode> = () => (
  <div className={Styles.sidebar} data-testid="sidebar">
    <div className={Styles.home}>
      <a href="/">
        <img src="/logos/craigs.svg" />
      </a>
    </div>

    <Links />
    <Social />
  </div>
)

export default Sidebar
