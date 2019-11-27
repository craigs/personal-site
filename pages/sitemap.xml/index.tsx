import { getUri } from '../../lib/getUri'

// tslint:disable-next-line: no-empty
const Page = () => {}

const generateSitemap = (req: any) => {
  const uri = getUri(req)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${uri}/sitemaps/articles.xml</loc>
      </sitemap>

      <sitemap>
        <loc>${uri}/sitemaps/others.xml</loc>
      </sitemap>
    </sitemapindex>`

  return sitemap
}

Page.getInitialProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(req))
  res.end()
}

export default Page
