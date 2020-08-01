import { IArticle } from '~typings/IArticle'

export const NotFound: IArticle = {
  body:
    'Sorry, there is no article to be displayed. <br />Please check your URL.',
  id: 0,
  slug: '/',
  teaser: 'The article you were looking for was not found',
  title: 'Article not found'
}
