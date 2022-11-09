import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Thumbnail } from '../components'

interface Article {
  createdAt: string
  slug: string
  teaser: string
  title: string
  cover: any
}

interface PageProps {
  articles: Article[]
}

const compareDates = (a: Article, b: Article): number => {
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
      <div style={{
        display: 'grid',
        gridGap: '50px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
        marginTop: '3rem'
      }}>
        {availableArticles.map(props => <Thumbnail key={props.slug} {...props} />)}
      </div>

      <Link href="/articles">
        More articles
        <Image
          alt=''
          height={14}
          src='/arrow.svg'
          width={20}
          style={{ marginLeft: 15, top: 1, position: 'relative' }}
        />
      </Link>

      <hr style={{ marginLeft: 0 }} />

      <h2 style={{ paddingLeft: 0 }}>Recommended books</h2>

      <p style={{ paddingLeft: 0 }}>
        I love consuming knowledge. Technical, business and history. Take a peek
        at some of the books I highly recommend.
      </p>

      <Link href="/books">
        Visit the bookshelf
        <Image
          alt=''
          height={14}
          src='/arrow.svg'
          width={20}
          style={{ marginLeft: 15, top: 1, position: 'relative' }}
        />
      </Link>

      <p>&nbsp;</p>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('pages/articles')

  const articles = files
    .filter(filename => filename.endsWith('.md'))
    .slice(0, 4)
    .map(filename => {
      const file = fs.readFileSync(`pages/articles/${filename}`, 'utf-8')
      const { data } = matter(file)

      return { ...data }
    })

  return {
    props: {
      articles
    }
  }
}

export default Page
