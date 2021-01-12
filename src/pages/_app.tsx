import '../styles/index.scss'

import React from 'react'
import TagManager from 'react-gtm-module'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { useEffect } from 'react'

const MainApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GTM_ID) return

    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_ID
    })
  })

  return <Component {...pageProps} />
}

export default MainApp
