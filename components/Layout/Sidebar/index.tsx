import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Links } from './Links'
import { Social } from './Social'
import Styles from './index.module.scss'

export const Sidebar: FC = () => (
  <div className={Styles.sidebar}>
    <div className={Styles.home}>
      <Link href='/' title='home'>
        <Image
          alt='home'
          height={70}
          src='/logos/craigs.svg'
          width={70}
        />
      </Link>
    </div>

    <Links />
    <Social />
  </div>
)
