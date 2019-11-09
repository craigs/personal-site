import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

export const Article = ({ title, body }) => (
  <>
    <h1>{title}</h1>
    <ReactMarkdown escapeHtml={false} source={body} />
  </>
)
