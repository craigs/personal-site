import fs from 'fs'
import matter from 'gray-matter'
import { FC } from 'react'
import { Thumbnail } from '../../components'

export interface Article {
  createdAt: string
  slug: string
  teaser: string
  title: string
  cover: any
}

interface PageProps {
  articles: Article[]
}

const compareDates = (a: Pick<Article, 'createdAt'>, b: Pick<Article, 'createdAt'>): number => {
  const d1 = new Date(a.createdAt).getTime()
  const d2 = new Date(b.createdAt).getTime()

  if (d1 < d2) return -1
  if (d1 > d2) return 1

  return 0
}

const Page: FC<PageProps> = ({ articles }) => {
  const availableArticles = articles
    .filter(({ title }) => title != null)
    .sort(compareDates)
    .reverse()

  return (
    <div>
      <h2>Articles</h2>

      <div style={{
        display: 'grid',
        gridGap: '50px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
        margin: '0 2rem'
      }}>
        {availableArticles.map(props => <Thumbnail key={props.slug} {...props} />)}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('pages/articles')

  const articles = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const file = fs.readFileSync(`pages/articles/${filename}`, 'utf-8')
      const { data } = matter(file)

      return { ...data }
    })

  const availableArticles = articles
    .filter(({ title }) => title != null)
    // @ts-expect-error
    .sort(compareDates)
    .reverse()

  return {
    props: {
      articles
    }
  }
}

export default Page
