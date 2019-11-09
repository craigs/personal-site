import React from 'react'

import Styles from './index.css'

export const Podcast = ({ link, image, title, author }) => (
  <a href={link} className={Styles.podcast}>
    <img src={image.url} />
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  </a>
)
