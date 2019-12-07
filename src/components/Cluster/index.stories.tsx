import * as React from 'react'
import Cluster from '../Cluster'
import renderer from '../rendered'
import { Provider } from 'react-fela'

export default { title: 'Cluster' }

interface Props {}

export const emptyCluster: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster></Cluster>
  </Provider>
)
