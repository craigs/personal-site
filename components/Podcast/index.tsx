import GraphImg from 'graphcms-image'
import React from 'react'

import Styles from './index.module.scss'

export const Podcast = ({ link, image, title, author }) => (
  <a href={link} className={Styles.podcast}>
    {process.browser && (
      <GraphImg
        backgroundColor={false}
        className={Styles.image}
        fit="scale"
        image={image}
        maxWidth={66}
        withWebp={true}
      />
    )}

    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  </a>
)
