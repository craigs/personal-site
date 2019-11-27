import { generate } from './generate'

// tslint:disable-next-line: no-empty
const Page = () => {}

Page.getInitialProps = ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(generate(req))
  res.end()
}

export default Page
