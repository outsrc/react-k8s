import * as React from 'react'
import { NAME, RESOURCE } from './styles'
import { useFela } from 'react-fela'

interface ResourceLabelProps {
  resource: string
  name: string
}

const ResourceLabel: React.FunctionComponent<ResourceLabelProps> = ({
  resource,
  name
}) => {
  const { css } = useFela()

  return (
    <span className={css(RESOURCE)}>
      {resource}:<span className={css(NAME)}>{name}</span>
    </span>
  )
}

export default ResourceLabel
