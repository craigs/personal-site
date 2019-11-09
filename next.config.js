// @ts-nocheck
const withCss = require('@zeit/next-css')

const options = {
  cssModules: true,
  publicRuntimeConfig: {
    AMAZON_AFFILIATE: 'craigs01b-20',
    GRAPHCMS_API:
      'https://api-uswest.graphcms.com/v1/cjru2guibf57u01ggsxj5ff6i/master'
  }
}

module.exports = withCss(options)
