import { IncomingMessage } from 'http'
import { GetServerSideProps } from 'next'
import { FC, ReactNode } from 'react'
import { getUri } from '~lib/getUri'

const generateSitemap = (req: IncomingMessage) => {
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(req))
  res.end()

  return {
    props: {}
  }
}

const Page: FC<ReactNode> = () => null

export default Page
