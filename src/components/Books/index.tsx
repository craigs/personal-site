import React, { FC } from 'react'
import { IBook } from '~typings/IBook'
import { Book } from '../Book'

import Styles from './index.module.scss'

interface IBooksProps {
  collection: IBook[]
}

export const Books: FC<IBooksProps> = ({ collection }) => (
  <div className={Styles.books}>
    {collection.map((book: IBook) => (
      <Book key={book.id} {...book} />
    ))}
  </div>
)
