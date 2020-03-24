module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        warnForDuplicates: false,
        stage: 0,
        features: {
          customProperties: {
            preserve: true,
            appendVariables: true
          }
        }
      }
    ],
    'postcss-flexbugs-fixes',
    [
      'autoprefixer',
      {
        flexbox: 'no-2009'
      }
    ]
  ]
}
