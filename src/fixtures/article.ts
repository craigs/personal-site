import { Article as ArticleInterface } from '~typings'

const Article: ArticleInterface = {
  id: '1',
  slug: 'my-article',
  title: 'My article',
  coverImage: {
    credit: 'Photo by me',
    image: {
      blur: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
      height: 750,
      thumbnail: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
      url: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
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
          url: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
          thumbnail: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
          blur: 'https://media.graphcms.com/resize=w:170,fit:scale/compress/p5lB3tQlQX2hDsjvRQQ8',
          height: 933,
          width: 1400
        }
      }
    }
  ]
}

export default Article
