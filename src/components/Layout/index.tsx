import Head from 'next/head'
import React, { FC, ReactNode, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Favicon from './Favicon'
import Sidebar from './Sidebar'

import Styles from './index.module.scss'

export const Layout: FC<ReactNode> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handlers = useSwipeable({
    onSwipedLeft: () => setOpen(false),
    onSwipedRight: () => setOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  return (
    <>
      <Head>
        <title>craigs.io | Welcome</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="craigs.io" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:site_name" content="craigs.io" />
        <Favicon />
      </Head>

      <div {...handlers}>
        <div className={Styles.toggle}>
          <label htmlFor="toggler">
            <img src="/hamburger.svg" />
          </label>
        </div>

        <input
          id="toggler"
          checked={open}
          className={Styles.toggler}
          name="toggler"
          onChange={() => setOpen(!open)}
          type="checkbox"
        />

        <div className={Styles.container}>
          <Sidebar />

          <div className={Styles.content}>{children}</div>
        </div>
      </div>
    </>
  )
}
