import React from 'react'

import Styles from './index.css'

export default () => (
  <div className={Styles.container}>
    <a href="https://cogent.co" className={Styles.company}>
      <img src="/logos/cogent-symbol.svg" />
      <br />
      I ♥️ working at <br />
      Cogent, Melbourne
    </a>

    <br />

    <a href="https://cogent.co/careers" className={Styles.company}>
      We're hiring!
    </a>
  </div>
)
