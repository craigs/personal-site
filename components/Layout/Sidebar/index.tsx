import React from 'react'
import Company from './Company'
import Links from './Links'
import Social from './Social'

import Styles from './index.css'

export default () => (
  <div className={Styles.sidebar}>
    <div className={Styles.home}>
      <a href="/">
        <img src="/logos/craigs.svg" />
      </a>
    </div>

    <Links />
    <Social />
    <Company />
  </div>
)
