import { GetServerSideProps } from 'next'

const Page = () => { }

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://craigs.io/sitemaps/articles.xml</loc>
  </sitemap>

  <sitemap>
    <loc>https://craigs.io/sitemaps/others.xml</loc>
  </sitemap>
</sitemapindex>`

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Page
