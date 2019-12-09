import * as React from 'react'
import { ILabel } from '../../helpers'
import { useFela } from 'react-fela'
import ResourceLabel from '../ResourceLabel'
import { LABEL } from './styles'
import { IStyle } from 'fela'

interface LabelProps {
  label: ILabel
  textStyle?: IStyle
  style?: IStyle
}
const Label: React.FunctionComponent<LabelProps> = ({
  label,
  textStyle,
  style
}) => {
  const { css } = useFela()

  return (
    <div className={css(LABEL, style || {})}>
      <ResourceLabel
        textStyle={textStyle}
        resource={label.key}
        name={label.value}
      />
    </div>
  )
}

export default Label
