import { IncomingMessage } from 'http'
import { GetServerSideProps } from 'next'
import { FC, ReactNode } from 'react'
import { ArticlesQuery } from '~graphql'
import { Api } from '~lib/Api'
import { getUri } from '~lib/getUri'
import { Article } from '~typings'

export const generate = (req: IncomingMessage, articles: Article[]): string => {
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { data } = await Api.query({
    query: ArticlesQuery,
    variables: { category: 'article' }
  })

  const { articles } = data

  res.setHeader('Content-Type', 'text/xml')
  res.write(generate(req, articles))
  res.end()

  return {
    props: {}
  }
}

const Page: FC<ReactNode> = () => null

export default Page
