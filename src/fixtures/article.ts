import { IArticle } from '~typings/IArticle'

const Article: IArticle = {
  id: '1',
  slug: 'my-article',
  title: 'My article',
  coverImage: {
    credit: 'Photo by me',
    image: {
      handle: 'a71MReZnTieJ9KFUGbft',
      height: 750,
      width: 1500
    }
  },
  contents: [
    {
      id: 'ckdpn6u940asc018957sd36xp',
      title: 'Intro',
      content: 'Technical interviews for developer jobs can be difficult.',
      image: {
        credit: 'Photo by me',
        image: {
          handle: 'p42MReZnTieJ9KFUGtni',
          height: 933,
          width: 1400
        }
      }
    }
  ]
}

export default Article
