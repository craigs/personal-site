module.exports = {
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/components/**/__tests__/*.{ts,tsx}',
    '<rootDir>/lib/**/__tests__/*.{ts,tsx}',
    '<rootDir>/pages/**/__tests__/*.{ts,tsx}'
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'jest.tsconfig.json'
    }
  }
}
