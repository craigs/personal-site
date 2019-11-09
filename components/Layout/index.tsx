import Head from 'next/head'
import React from 'react'
import Favicon from './Favicon'
import Sidebar from './Sidebar'

import '../../styles/index.css'
import Styles from './index.css'

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>craigs.io | Welcome</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Favicon />
    </Head>

    <div className={Styles.container}>
      <Sidebar />

      <div className={Styles.content}>
        {children}

        <div className={Styles.credits}>
          <img src="https://graphcms.com/static/powered_by_graphcms-f67a6db8eb29a7e1b977c6b564120e34.svg" />
        </div>
      </div>
    </div>
  </>
)
