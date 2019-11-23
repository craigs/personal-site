// @ts-nocheck
require('dotenv').config()
const withCss = require('@zeit/next-css')

const path = require('path')
const Dotenv = require('dotenv-webpack')

const options = {
  cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {fs: 'empty'}
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({path: path.join(__dirname, '.env'), systemvars: true})
    ]

    return config
  }
}

module.exports = withCss(options)
