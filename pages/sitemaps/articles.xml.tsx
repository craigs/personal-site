import fs from 'fs'
import matter from 'gray-matter'
import { GetServerSideProps } from 'next'
import { Article } from '../articles'

const uri = 'https://craigs.io'

export const generate = (articles: Article[]) => {
  const urls = articles.map(({ slug }) => `<url>
        <loc>${uri}/articles/${slug}</loc>
      </url>`
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`
}

const Page = () => { }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const files = fs.readdirSync('pages/articles')

  const articles = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const file = fs.readFileSync(`pages/articles/${filename}`, 'utf-8')
      const { data } = matter(file)

      return { ...data } as Article
    })

  res.setHeader('Content-Type', 'text/xml')
  res.write(generate(articles))
  res.end()

  return {
    props: {}
  }
}

export default Page
