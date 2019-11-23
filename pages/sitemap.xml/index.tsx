import React from 'react'
import {IncomingMessage} from 'http'

// tslint:disable-next-line: no-empty
const Page = () => {}

const getProtocol = req => {
  let proto = req.connection.encrypted ? 'https' : 'http'
  proto = req.headers['x-forwarded-proto'] || proto
  return proto.split(/\s*,\s*/)[0]
}

const generateSitemap = (req: IncomingMessage) => {
  const {host} = req.headers
  const protocol = getProtocol(req)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${protocol}://${host}/podcasts</loc>
      <lastmod>2019-11-24</lastmod>
    </url>
  </urlset>`

  return sitemap
}

Page.getInitialProps = ({req, res}) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(req))
  res.end()
}

export default Page
