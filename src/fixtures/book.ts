import { Book as BookInterface } from '~typings'

const Book: BookInterface = {
  author: 'Craig',
  id: 1,
  image: {
    handle: 'cover-image',
    height: 30,
    width: 30
  },
  link: 'http://localhost/',
  subtitle: 'A book about me',
  title: 'My book'
}

export default Book
