import React from 'react'
import Links from './Links'
import Social from './Social'

import Styles from './index.module.scss'

export default () => (
  <div className={Styles.sidebar}>
    <div className={Styles.home}>
      <a href="/">
        <img src="/logos/craigs.svg" />
      </a>
    </div>

    <Links />
    <Social />
  </div>
)
