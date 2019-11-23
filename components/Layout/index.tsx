import Head from 'next/head'
import React, {useState} from 'react'
import {Swipeable} from 'react-swipeable'
import Favicon from './Favicon'
import Sidebar from './Sidebar'

import '../../styles/index.css'
import Styles from './index.css'

export const Layout = ({children}) => {
  const [open, setOpen] = useState(false)

  const config = {
    onSwipedLeft: () => setOpen(false),
    onSwipedRight: () => setOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  }

  return (
    <>
      <Head>
        <title>craigs.io | Welcome</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <Favicon />
      </Head>

      <Swipeable {...config}>
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

          <div className={Styles.content}>
            {children}

            <div className={Styles.credits}>
              <img src="https://graphcms.com/static/powered_by_graphcms-f67a6db8eb29a7e1b977c6b564120e34.svg" />
            </div>
          </div>
        </div>
      </Swipeable>
    </>
  )
}
