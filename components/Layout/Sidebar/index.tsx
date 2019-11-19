import Link from 'next/link'
import React from 'react'
import Company from './Company'
import Links from './Links'
import Social from './Social'

import Styles from './index.css'

export default () => (
  <div className={Styles.sidebar}>
    <Link href="/">
      <a className={Styles.home}>
        <img src="/logos/craigs.svg" />
      </a>
    </Link>

    <Links />
    <Social />
    <Company />
  </div>
)
