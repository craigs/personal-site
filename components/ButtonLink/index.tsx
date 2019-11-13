import Link from 'next/link'
import React from 'react'

import Styles from './index.css'

export const ButtonLink = ({ link, label }) => (
  <Link href={link}>
    <a className={Styles.button}>
      {label}
      <img src="/arrow.svg" />
    </a>
  </Link>
)
