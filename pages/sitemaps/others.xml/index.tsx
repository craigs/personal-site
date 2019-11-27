import { IncomingMessage } from 'http'
import { getUri } from '../../../lib/getUri'

export const generate = (req: IncomingMessage) => {
  const uri = getUri(req)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${uri}/bio</loc>
      </url>
      <url>
        <loc>${uri}/books</loc>
      </url>
      <url>
        <loc>${uri}/podcasts</loc>
      </url>
      <url>
        <loc>${uri}/work</loc>
      </url>
    </urlset>`

  return sitemap
}

// tslint:disable-next-line: no-empty
const Page = () => {}

Page.getInitialProps = ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generate(req))
  res.end()
}

export default Page
