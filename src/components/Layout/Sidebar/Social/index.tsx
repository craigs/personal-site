import React, { FC, ReactNode } from 'react'

import Styles from './index.module.scss'

const Social: FC<ReactNode> = () => (
  <div className={Styles.social}>
    <hr />

    <a href="https://twitter.com/craigs_io">
      <img src="/logos/twitter.svg" />
      Twitter
    </a>

    <a href="https://www.linkedin.com/in/craigs0/">
      <img src="/logos/linkedin.svg" />
      LinkedIn
    </a>

    <a href="https://github.com/craigs/personal-site">
      <img src="/logos/github.svg" />
      GitHub
    </a>
  </div>
)

export default Social
