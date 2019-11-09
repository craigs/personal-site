const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    require('postcss-easy-import')({
      prefix: '_'
    }), // keep this first
    require('postcss-global-import')({}),
    require('postcss-preset-env')({
      warnForDuplicates: false,
      stage: 0,
      features: {
        customProperties: {
          preserve: true,
          appendVariables: true
        }
      }
    }),
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]
}
