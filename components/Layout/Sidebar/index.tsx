import React from 'react'
import Company from './Company'
import Links from './Links'
import Social from './Social'

import Styles from './index.css'

export default () => (
  <div className={Styles.sidebar}>
    <a href="/" className={Styles.home}>
      <img src="/logos/craigs.svg" />
    </a>

    <Links />
    <Social />
    <Company />
  </div>
)
