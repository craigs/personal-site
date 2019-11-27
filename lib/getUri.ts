import { getProtocol } from './getProtocol'

export const getUri = req => {
  const { host } = req.headers
  const protocol = getProtocol(req)
  return `${protocol}://${host}`
}
