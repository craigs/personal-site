import App from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'

class MainApp extends App {
  public componentDidMount() {
    if (!process.env.GTM_ID) return

    TagManager.initialize({
      gtmId: process.env.GTM_ID
    })
  }

  public render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MainApp
