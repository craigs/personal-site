import { FC, ReactNode } from 'react'

interface ColProps {
  children: ReactNode
  gap: string
}

export const Col: FC<ColProps> = ({ children, gap }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: gap ?? '1rem'
  }}>
    {children}
  </div>
)
