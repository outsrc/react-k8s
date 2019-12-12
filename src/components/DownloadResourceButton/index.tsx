import * as React from 'react'
import { useFela } from 'react-fela'
import YamlIcon from '../Icons/YamlIcon'
import { BUTTON_YAML } from './styles'

interface Props {
  onClick?: () => any
}

const DownloadResourceButton: React.FunctionComponent<Props> = ({
  onClick
}) => {
  const { css } = useFela()

  return (
    <button className={css(BUTTON_YAML)} onClick={onClick}>
      <YamlIcon />
    </button>
  )
}

export default DownloadResourceButton
