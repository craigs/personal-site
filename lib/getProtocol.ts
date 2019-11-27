export const getProtocol = req => {
  let proto = req.connection.encrypted ? 'https' : 'http'
  proto = req.headers['x-forwarded-proto'] || proto
  return proto.split(/\s*,\s*/)[0]
}
