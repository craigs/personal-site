module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  rootDir: '..',
  testMatch: ['<rootDir>/src/**/__tests__/*.test.{ts,tsx}'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '~components': '<rootDir>/src/components/index',
    '~graphql': '<rootDir>/src/graphql/index',
    '~lib/(.*)': '<rootDir>/src/lib/$1',
    '~typings/(.*)': '<rootDir>/src/typings/$1'
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'jest.tsconfig.json'
    }
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.tsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
