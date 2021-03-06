import * as React from 'react'
import Cluster from '../Cluster'
import Namespace from '../Namespace'
import renderer from '../rendered'
import { Provider } from 'react-fela'
import Service from './index'
import { IDeployment } from '../../helpers'

export default { title: 'Service' }

interface Props {}

const backend: IDeployment = {
  name: 'back-deployment',
  image: 'gcr.io/outsrc/outsrc-back:1.0.0',
  env: [
    { key: 'PORT', value: '3000', from: 'literal' },
    { key: 'JWT_SECRET', value: 'outsrc-secrets', from: 'secretKeyRef' }
  ],
  labels: [
    { key: 'service', value: 'back' },
    { key: 'env', value: 'production' },
    { key: 'type', value: 'python-microservice' }
  ],
  port: 3000,
  replicas: 3
}

const frontend: IDeployment = {
  name: 'front-deployment',
  image: 'gcr.io/outsrc/outsrc-front:1.0.0',
  env: [
    { key: 'API_URL', value: 'https://outsrc.dev/api', from: 'literal' },
    { key: 'PORT', value: '3000', from: 'literal' }
  ],
  labels: [{ key: 'service', value: 'front' }],
  port: 3000,
  replicas: 2
}

export const singleDeployment: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace namespace={{ name: 'outsrc' }}>
        <Service deployment={backend} port={3000} protocol='TCP' />
        <Service deployment={frontend} port={3000} protocol='TCP' />
      </Namespace>
    </Cluster>
  </Provider>
)
