import { IncomingMessage } from 'http'
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
