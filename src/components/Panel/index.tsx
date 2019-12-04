import * as React from 'react'
import { PANEL, BOTTOM_ROW, LEFT_BOTTOM_AREA, CONTENT } from './styles'
import { useFela } from 'react-fela'
import { IStyle } from 'fela'

interface PanelProps {
  bottomLeftName?: string
  children: React.ReactNode
  panelStyles?: IStyle
}

const Panel: React.FunctionComponent<PanelProps> = ({
  bottomLeftName,
  children,
  panelStyles
}) => {
  const { css } = useFela()

  return (
    <div className={css(PANEL, panelStyles || {})}>
      <div className={css(CONTENT)}>{children}</div>
      {bottomLeftName && (
        <div className={css(BOTTOM_ROW)}>
          {bottomLeftName && (
            <div className={css(LEFT_BOTTOM_AREA)}>{bottomLeftName}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Panel
