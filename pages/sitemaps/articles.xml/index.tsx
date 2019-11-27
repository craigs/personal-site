import { IncomingMessage } from 'http'
import { ArticlesQuery } from '../../../graphql/ArticlesQuery'
import { Api } from '../../../lib/Api'
import { getUri } from '../../../lib/getUri'

export const generate = (req: IncomingMessage, articles: any) => {
  const uri = getUri(req)

  const urls = articles.map(
    article => `<url>
        <loc>${uri}/articles/${article.slug}</loc>
      </url>`
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`
}

// tslint:disable-next-line: no-empty
const Page = () => {}

Page.getInitialProps = async ({ req, res }) => {
  const { data } = await Api.query({
    query: ArticlesQuery,
    variables: { category: 'article' }
  })

  const { articles } = data

  res.setHeader('Content-Type', 'text/xml')
  res.write(generate(req, articles))
  res.end()
}

export default Page
