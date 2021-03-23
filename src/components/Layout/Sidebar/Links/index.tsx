import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { Dot } from './Dot'
import links from './links'
import { Link as LinkInterface } from './Link'

import Styles from './index.module.scss'

const Links: FC<ReactNode> = () => {
  const { asPath } = useRouter()

  const renderLink = (link: LinkInterface) => {
    const { href, as, name } = link
    const active = asPath.startsWith(as)

    return (
      <Link href={href} as={as}>
        <a className={clsx({ [Styles.active]: active })}>
          {active && <Dot />}
          {name}
        </a>
      </Link>
    )
  }

  return (
    <div className={Styles.links}>
      {links.map(link => (
        <div key={link.as}>{renderLink(link)}</div>
      ))}
    </div>
  )
}

export default Links
