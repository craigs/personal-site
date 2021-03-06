import React, { FC } from 'react'
import GraphImg from 'graphcms-image'
import { Book as BookInterface } from '~typings'

import Styles from './index.module.scss'

export const Book: FC<BookInterface> = ({
  author,
  image,
  link,
  subtitle,
  title
}) => (
  <div className={Styles.book}>
    <a href={link} className={Styles.link}>
      <GraphImg
        backgroundColor={false}
        className={Styles.image}
        fit="scale"
        image={image}
        maxWidth={170}
        withWebp={true}
      />

      <div>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{author}</p>
      </div>
    </a>
  </div>
)
