module.exports = {
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/__tests__/**/*.test.{ts,tsx}',
    '<rootDir>/components/**/__tests__/*.test.{ts,tsx}',
    '<rootDir>/lib/**/__tests__/*.test.{ts,tsx}',
    '<rootDir>/pages/**/__tests__/*.test.{ts,tsx}'
  ],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'jest.tsconfig.json'
    }
  }
}
