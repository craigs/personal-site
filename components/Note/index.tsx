import Link from 'next/link'
import { FC, ReactNode } from 'react'
import Styles from './index.module.scss'

export type NoteProps = {
  children?: ReactNode
  id: string
}

const NoteLink: FC<NoteProps> = ({ id }) => (
  <Link href={`#note-${id}`} id={`note-ref-${id}`}>
    <sup className={Styles.note}>^{id}</sup>
  </Link>
)

const Footnote: FC<NoteProps> = ({ children, id }) => (
  <p className={Styles.note}>
    <a id={`note-${id}`}>{id}.</a>
    {' '}
    {children}
  </p>
)

export const Note: FC<NoteProps> = ({ children, id }) => {
  if (!children) return <NoteLink id={id} />

  return <Footnote id={id}>{children}</Footnote>
}
