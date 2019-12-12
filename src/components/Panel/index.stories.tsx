import * as React from 'react'
import renderer from '../rendered'
import { Provider } from 'react-fela'
import Panel from './index'
import { IStyle } from 'fela'

export default { title: 'Panel' }

interface Props {}

const PANEL: IStyle = {
  backgroundColor: 'red'
}

const INNER: IStyle = {
  backgroundColor: 'yellow'
}

export const emptyPanel: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Panel panelStyles={PANEL} innerPanelStyles={INNER}>
      Some content
    </Panel>
  </Provider>
)

export const withBottomLeftPanel: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Panel
      panelStyles={PANEL}
      innerPanelStyles={INNER}
      bottomLeftName='Left content'
    >
      Some content
    </Panel>
  </Provider>
)

export const withBottomRightPanel: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Panel
      panelStyles={PANEL}
      innerPanelStyles={INNER}
      bottomRightName='Right content'
    >
      Some content
    </Panel>
  </Provider>
)

export const withBothPanel: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Panel
      panelStyles={PANEL}
      innerPanelStyles={INNER}
      bottomRightName='Right content'
      bottomLeftName='Left content'
    >
      Some content
    </Panel>
  </Provider>
)
