const withMarkdoc = require('@markdoc/next.js')

// @ts-expect-error
module.exports = withMarkdoc({
  // schemaPath: './src/markdoc'
})({
  experimental: {
    appDir: true
  },
  pageExtensions: ['md', 'ts', 'tsx']
})
