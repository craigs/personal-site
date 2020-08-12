import { IArticle } from '~typings/IArticle'

export const NotFound: IArticle = {
  id: '0',
  slug: '/',
  teaser: 'The article you were looking for was not found',
  title: 'Article not found',
  contents: [
    {
      id: '0',
      content:
        'Sorry, there is no article to be displayed. <br />Please check your URL.',
      title: 'Article not found'
    }
  ]
}
