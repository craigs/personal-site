import React from 'react'

import Styles from './index.css'

export const Book = ({ link, image, title, subtitle, author }) => (
  <div className={Styles.book}>
    <a href={link}>
      <img src={image.url} />
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{author}</p>
    </a>
  </div>
)
