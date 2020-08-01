import { GetServerSideProps } from 'next'
import { FC, ReactNode } from 'react'
import { getUri } from '~lib/getUri'

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

export const getServerSideProps: GetServerSideProps = ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(req))
  res.end()

  return null
}

const Page: FC<ReactNode> = () => null

export default Page
