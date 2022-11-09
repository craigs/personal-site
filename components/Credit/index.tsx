import Link from 'next/link'
import { FC } from 'react'
import Styles from './index.module.scss'

export type CoverProps = {
  attribution?: string
  author?: string
  link?: string
}


export const Credit: FC<CoverProps> = ({
  attribution,
  author,
  link
}) => {
  if (author && !link) return (
    <p className={Styles.credit}>
      {attribution}{' '}{author}
    </p>
  )

  return (
    <p className={Styles.credit}>
      {attribution}{' '}
      {link && author && <Link href={link}>{author}</Link>}
    </p>
  )
}
