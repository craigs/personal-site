import classNames from 'classnames/bind'
import React, { FC } from 'react'

import Styles from './index.module.scss'

const css = classNames.bind(Styles)

interface ISpinnerProps {
  large?: boolean
  medium?: boolean
  small?: boolean
  white?: boolean
}

export const Spinner: FC<ISpinnerProps> = props => {
  const classes = css({
    spinner: true,
    ...props
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
