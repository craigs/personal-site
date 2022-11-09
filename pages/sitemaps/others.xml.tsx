import { IncomingMessage } from 'http'
import { GetServerSideProps } from 'next'

const uri = 'https://craigs.io'

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${uri}/bio</loc>
  </url>
  <url>
    <loc>${uri}/books</loc>
  </url>
  <url>
    <loc>${uri}/work</loc>
  </url>
</urlset>`

const Page = () => { }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Page
