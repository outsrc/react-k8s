import * as React from 'react'
import Cluster from '../Cluster'
import Namespace from '../Namespace'
import renderer from '../rendered'
import { Provider } from 'react-fela'
import { IDeployment, IIngress, IService } from '../../helpers'
import Ingress from './index'

export default { title: 'Ingress' }

interface Props {}

const backend: IDeployment = {
  name: 'back-deployment',
  image: 'gcr.io/outsrc/outsrc-back:1.0.0',
  env: [
    { key: 'PORT', value: '3000' },
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
    { key: 'API_URL', value: 'https://outsrc.dev/api' },
    { key: 'PORT', value: '3000' }
  ],
  labels: [{ key: 'service', value: 'front' }],
  port: 3000,
  replicas: 2
}

const codexswFrontend: IDeployment = {
  name: 'front-deployment',
  image: 'gcr.io/codexsw/codexsw-front:0.1.0',
  env: [{ key: 'PORT', value: '3000' }],
  labels: [{ key: 'service', value: 'front' }],
  port: 3000,
  replicas: 1
}

const backendService: IService = {
  name: 'back-service',
  deployment: backend,
  port: 3000,
  protocol: 'TCP'
}

const frontendService: IService = {
  name: 'front-service',
  deployment: frontend,
  port: 3000,
  protocol: 'TCP'
}

const codexswFrontendService: IService = {
  name: 'front-service',
  deployment: codexswFrontend,
  port: 3000,
  protocol: 'TCP'
}

const ingress: IIngress = {
  name: 'outsrc-dev-ingress',
  hosts: ['outsrc.dev'],
  annotations: [
    { key: 'kubernetes.io/ingress.class', value: 'kong' },
    { key: 'kubernetes.io/tls-acme', value: 'true' },
    { key: 'cert-manager.io/cluster-issuer', value: 'letsencrypt-prod' }
  ],
  paths: [
    { backend: backendService, path: '/api', port: 3000 },
    { backend: frontendService, path: '/', port: 3000 }
  ]
}

const codexswIngress: IIngress = {
  name: 'codexsw-com-ingress',
  hosts: ['codexsw.com'],
  annotations: [
    { key: 'kubernetes.io/ingress.class', value: 'kong' },
    { key: 'kubernetes.io/tls-acme', value: 'true' },
    { key: 'cert-manager.io/cluster-issuer', value: 'letsencrypt-prod' }
  ],
  paths: [{ backend: codexswFrontendService, path: '/', port: 3000 }]
}

export const singleDeployment: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace namespace={{ name: 'outsrc' }}>
        <Ingress {...ingress} />
      </Namespace>
    </Cluster>
  </Provider>
)

export const multiDeployment: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace namespace={{ name: 'outsrc' }}>
        <Ingress {...ingress} />
      </Namespace>
      <Namespace namespace={{ name: 'codexsw' }}>
        <Ingress {...codexswIngress} />
      </Namespace>
    </Cluster>
  </Provider>
)
