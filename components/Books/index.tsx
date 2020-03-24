import React from 'react'
import { Book } from '../Book'

import Styles from './index.module.scss'

export const Books = ({ collection }) => (
  <div className={Styles.books}>
    {collection.map((book: any) => (
      <Book key={book.id} {...book} />
    ))}
  </div>
)
