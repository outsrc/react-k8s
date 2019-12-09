import * as React from 'react'
import {
  PANEL,
  BOTTOM_ROW,
  LEFT_BOTTOM_AREA,
  CONTENT,
  INTERNAL
} from './styles'
import { useFela } from 'react-fela'
import { IStyle } from 'fela'

interface PanelProps {
  bottomLeftName?: string | React.ReactNode
  children?: React.ReactNode
  panelStyles?: IStyle
  innerPanelStyles?: IStyle
  contentStyles?: IStyle
}

const Panel: React.FunctionComponent<PanelProps> = ({
  bottomLeftName,
  children,
  panelStyles,
  innerPanelStyles,
  contentStyles
}) => {
  const { css } = useFela()

  return (
    <div className={css(PANEL, panelStyles || {})}>
      <div className={css(INTERNAL, innerPanelStyles || {})}>
        <div className={css(CONTENT, contentStyles || {})}>{children}</div>
        {bottomLeftName && (
          <div className={css(BOTTOM_ROW)}>
            {bottomLeftName && (
              <div className={css(LEFT_BOTTOM_AREA)}>{bottomLeftName}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Panel
