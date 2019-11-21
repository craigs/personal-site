// @ts-nocheck
const withCss = require('@zeit/next-css')

const options = {
  cssModules: true,
  env: {
    GRAPHCMS_API: process.env.GRAPHCMS_API
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {fs: 'empty'}

    return config
  }
}

module.exports = withCss(options)
