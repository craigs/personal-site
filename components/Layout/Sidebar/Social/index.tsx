import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Styles from './index.module.scss'

export const Social: FC = () => (
  <div className={Styles.social}>
    <hr />

    <Link
      title='@craigs_io'
      href='https://twitter.com/craigs_io'
    >
      <Image
        alt='Twitter'
        height={14}
        src='/logos/twitter.svg'
        width={16}
      />
      Twitter
    </Link>

    <Link
      title='craigs0'
      href='https://www.linkedin.com/in/craigs0/'
    >
      <Image
        alt='LinkedIn'
        height={16}
        src='/logos/linkedin.svg'
        width={16}
      />
      LinkedIn
    </Link>

    <Link
      title='github.com/craigs'
      href='https://github.com/craigs'
    >
      <Image
        alt='GitHub'
        height={16}
        src='/logos/github.svg'
        width={16}
      />
      GitHub
    </Link>
  </div>
)
