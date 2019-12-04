import * as React from 'react'
import Cluster from '../Cluster'
import Namespace from './index'
import renderer from '../rendered'
import { Provider } from 'react-fela'

export default { title: 'Namespace' }

interface Props {}

export const withOneNamespace: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace name='outsrc'>Nothing here</Namespace>
    </Cluster>
  </Provider>
)

export const witTwoNamespaces: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace name='outsrc'>Nothing here</Namespace>
      <Namespace name='kong'>Nothing here</Namespace>
    </Cluster>
  </Provider>
)
