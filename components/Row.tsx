import { FC, ReactNode } from 'react'

interface RowProps {
  children: ReactNode
  gap: string
}

export const Row: FC<RowProps> = ({ children, gap }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: gap ?? '1rem'
  }}>
    {children}
  </div>
)
