import classNames from 'classnames/bind'
import React from 'react'

import Styles from './index.css'

const css = classNames.bind(Styles)

export const Spinner = (props: any) => {
  const classes = css({
    large: props.large,
    medium: props.medium,
    small: props.small,
    spinner: true,
    white: props.white
  })

  return (
    <svg className={classes} viewBox="0 0 42 42" {...props}>
      <g fill="none" transform="translate(3 3)">
        <circle className={Styles.circle} cx="18" cy="18" r="18" />

        <path
          className={Styles.segment}
          d="M36 18c0-9.94-8.06-18-18-18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
