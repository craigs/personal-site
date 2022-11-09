import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'
import TagManager from 'react-gtm-module'

import { Layout } from '../components'

import '../styles/index.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!process.env.GTM_ID) return

    TagManager.initialize({
      gtmId: process.env.GTM_ID
    })
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
