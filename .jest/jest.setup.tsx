import '@testing-library/jest-dom';

const useRouter = {
  asPath: {
    startsWith: () => false
  }
}

jest.mock('next/router', () => ({ useRouter: () => useRouter }))

jest.mock(
  "next/image",
  () => ({ src, alt }) => <img src={ src } alt = { alt } />
)
