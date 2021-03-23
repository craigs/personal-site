import React, { FC } from 'react'
import { Book as BookInterface } from '~typings'
import { Book } from '../Book'

import Styles from './index.module.scss'

interface Props {
  collection: BookInterface[]
}

export const Books: FC<Props> = ({ collection }) => (
  <div className={Styles.books}>
    {collection.map((book: BookInterface) => (
      <Book key={book.id} {...book} />
    ))}
  </div>
)
