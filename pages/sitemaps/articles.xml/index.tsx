import { ArticlesQuery } from '../../../graphql/ArticlesQuery'
import { Api } from '../../../lib/Api'
import { generate } from './generate'

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
