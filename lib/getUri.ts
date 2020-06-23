import { IncomingMessage } from 'http'

export const getUri = (req: IncomingMessage): string => {
  const { host } = req.headers

  return `https://${host}`
}
