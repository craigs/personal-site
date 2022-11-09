import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Dot } from '../Dot'

import Styles from './index.module.scss'

const links = [
  {
    href: '/articles',
    name: 'Articles',
    title: 'Articles'
  },
  {
    href: '/books',
    name: 'Books',
    title: 'Recommended books'
  },
  {
    href: '/work',
    name: 'Work',
    title: 'Current employment'
  },
  {
    href: '/bio',
    name: 'Bio',
    title: 'Biography'
  }
]

export const Links: FC = () => {
  const { asPath } = useRouter()

  return (
    <div className={Styles.links}>
      {links.map(({ href, name, title }) => {
        const active = asPath.startsWith(href)
        return (
          <Link href={href} key={name} title={title}>
            {active && <Dot />}
            {name}
          </Link>
        )
      })}
    </div>
  )
}
