import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import Styles from './index.css'

export const Article = ({title, body}) => (
  <div className={Styles.container}>
    <h1>{title}</h1>
    <ReactMarkdown escapeHtml={false} source={body} />
  </div>
)
