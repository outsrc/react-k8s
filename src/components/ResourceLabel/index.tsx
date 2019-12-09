import * as React from 'react'
import { NAME, RESOURCE } from './styles'
import { useFela } from 'react-fela'
import { IStyle } from 'fela'

interface ResourceLabelProps {
  resource: string
  name: string
  textStyle?: IStyle
}

const ResourceLabel: React.FunctionComponent<ResourceLabelProps> = ({
  resource,
  name,
  textStyle
}) => {
  const { css } = useFela()

  return (
    <span className={css(RESOURCE, textStyle || {})}>
      {resource}:<span className={css(NAME, textStyle || {})}>{name}</span>
    </span>
  )
}

export default ResourceLabel
