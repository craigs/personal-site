import { FC, ReactNode } from 'react'

import Styles from './index.module.scss'

interface GridProps {
  children: ReactNode
  gap: string
}

export const Grid: FC<GridProps> = ({ children, gap }) => (
  <div className={Styles.container} style={{ gap: gap ?? 50 }}>
    {children}
  </div>
)
