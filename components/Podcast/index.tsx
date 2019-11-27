import React from 'react'
import GraphImg from 'graphcms-image'

import Styles from './index.css'

export const Podcast = ({ link, image, title, author }) => {
  return (
    <a href={link} className={Styles.podcast}>
      <GraphImg
        backgroundColor={false}
        className={Styles.image}
        fit="scale"
        image={image}
        maxWidth={66}
        withWebp={true}
      />

      <div>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </a>
  )
}
