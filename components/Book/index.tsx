import GraphImg from 'graphcms-image'
import React from 'react'

import Styles from './index.css'

export const Book = ({ link, image, title, subtitle, author }) => (
  <div className={Styles.book}>
    <a href={link} className={Styles.link}>
      {process.browser && (
        <GraphImg
          backgroundColor={false}
          className={Styles.image}
          fit="scale"
          image={image}
          maxWidth={170}
          withWebp={true}
        />
      )}

      <div>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{author}</p>
      </div>
    </a>
  </div>
)
