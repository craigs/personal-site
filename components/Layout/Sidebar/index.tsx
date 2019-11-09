import React from 'react'
import Company from './Company'
import Links from './Links'
import Social from './Social'

import Styles from './index.css'

export default () => (
  <div className={Styles.sidebar}>
    <Links />
    <Social />
    <Company />
  </div>
)
