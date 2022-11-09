import { FC, ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeProps {
  children: ReactNode
  lang: string
}

export const Code: FC<CodeProps> = ({ children, lang }) => (
  <SyntaxHighlighter
    language={lang}
    style={nord}
    showLineNumbers
    customStyle={{
      borderRadius: "5px",
      border: '1px solid rgba(255,255,255,0.05)',
      backgroundColor: "rgba(255,255,255,0.01)",
      padding: '1rem 0',
    }}
  >
    { /* @ts-expect-error */}
    {children?.props.children}
  </SyntaxHighlighter>
)
