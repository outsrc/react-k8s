import * as React from 'react'
import Cluster from '../Cluster'
import Namespace from './index'
import renderer from '../rendered'
import { Provider } from 'react-fela'
import Panel from '../Panel'
import { range } from 'ramda'

export default { title: 'Namespace' }

interface Props {}

interface WithPanelsProps {
  color: string
  panels?: number
}

const WithPanels: React.FunctionComponent<WithPanelsProps> = ({
  color,
  panels = 3
}) => (
  <React.Fragment>
    {range(0, panels).map((_, index) => (
      <Panel key={`${index}`} innerPanelStyles={{ backgroundColor: color }} />
    ))}
  </React.Fragment>
)

export const withOneNamespace: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace name='outsrc'>
        <WithPanels color='orange' />
      </Namespace>
    </Cluster>
  </Provider>
)

export const witTwoNamespaces: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace name='outsrc'>
        <WithPanels color='red' />
      </Namespace>
      <Namespace name='kong'>
        <WithPanels panels={6} color='green' />
      </Namespace>
    </Cluster>
  </Provider>
)

export const withThreeNamespaces: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace name='oursrc'>
        <WithPanels color='red' />
      </Namespace>
      <Namespace name='kong'>
        <WithPanels color='orange' panels={5} />
      </Namespace>
      <Namespace name='cert-manager'>
        <WithPanels color='green' panels={8} />
      </Namespace>
    </Cluster>
  </Provider>
)
