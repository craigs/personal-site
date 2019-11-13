// @ts-nocheck
const withCss = require('@zeit/next-css')

const options = {
  cssModules: true,
  env: {
    GRAPHCMS_API:
      'https://api-uswest.graphcms.com/v1/cjru2guibf57u01ggsxj5ff6i/master'
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    // config.module = {
    //   rules: [
    //     {
    //       exclude: ['/pages/**/__tests__/*']
    //     }
    //   ]
    // }

    return config
  }
}

module.exports = withCss(options)
