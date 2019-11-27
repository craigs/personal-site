import Link from 'next/link'
import React from 'react'

import Styles from './index.css'

export const ButtonLink = ({ link, as, label }) => (
  <Link href={link} as={as}>
    <a className={Styles.button}>
      {label}
      <img src="/arrow.svg" />
    </a>
  </Link>
)
