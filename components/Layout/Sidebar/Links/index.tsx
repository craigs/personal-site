import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Dot } from './Dot'
import links from './links'

import Styles from './index.css'
const css = classNames.bind(Styles)

export default () => {
  const { asPath } = useRouter()

  const renderLink = ({ href, as, name }) => {
    const active = asPath.startsWith(as)

    return (
      <Link href={href} as={as}>
        <a className={css({ active })}>
          {active && <Dot />}
          {name}
        </a>
      </Link>
    )
  }

  return (
    <div className={Styles.links}>
      {links.map(link => (
        <div key={link.as}>
          {renderLink({
            as: link.as,
            href: link.href,
            name: link.name
          })}
        </div>
      ))}
    </div>
  )
}
