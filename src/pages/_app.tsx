import App from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'

import '../styles/index.scss'

class MainApp extends App {
  public componentDidMount(): void {
    if (!process.env.NEXT_PUBLIC_GTM_ID) return

    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_ID
    })
  }

  public render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MainApp
