import * as React from 'react'

interface Props {
  className?: string
}

const YamlIcon: React.FunctionComponent<Props> = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <title />
    <path
      d='M18 20H6a1 1 0 010-2h12a1 1 0 010 2zM15.92 11.62A1 1 0 0015 11h-2V5a1 1 0 00-2 0v6H9a1 1 0 00-.92.62 1 1 0 00.21 1.09l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1 1 0 00.21-1.09z'
      fill='currentColor'
    />
  </svg>
)

export default YamlIcon
