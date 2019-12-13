import * as React from 'react'
import Cluster from '../Cluster'
import Namespace from '../Namespace'
import renderer from '../rendered'
import { Provider } from 'react-fela'
import Deployment from './index'

export default { title: 'Deployment' }

interface Props {}

export const singleDeployment: React.FunctionComponent<Props> = () => (
  <Provider renderer={renderer}>
    <Cluster>
      <Namespace namespace={{ name: 'outsrc' }}>
        <Deployment
          name='back-deployment'
          image='gcr.io/outsrc/outsrc-back:1.0.0'
          env={[
            {
              key: 'API_URL',
              value: 'https://outsrc.dev/api',
              from: 'literal'
            },
            { key: 'PORT', value: '3000', from: 'literal' },
            { key: 'JWT_SECRET', value: 'outsrc-secrets', from: 'secretKeyRef' }
          ]}
          labels={[
            { key: 'service', value: 'back' },
            { key: 'env', value: 'production' },
            { key: 'type', value: 'python-microservice' }
          ]}
          port={3000}
          replicas={3}
        />
        <Deployment
          name='front-deployment'
          image='gcr.io/outsrc/outsrc-front:1.0.0'
          env={[]}
          labels={[{ key: 'service', value: 'front' }]}
          port={3000}
          replicas={2}
        />
      </Namespace>
      <Namespace namespace={{ name: 'outsrc-master' }}>
        <Deployment
          name='back-deployment'
          image='gcr.io/outsrc/outsrc-back:1.0.0'
          env={[]}
          labels={[
            { key: 'service', value: 'back' },
            { key: 'env', value: 'production' },
            { key: 'type', value: 'python-microservice' }
          ]}
          port={3000}
          replicas={3}
        />
        <Deployment
          name='front-deployment'
          image='gcr.io/outsrc/outsrc-front:1.0.0'
          env={[]}
          labels={[{ key: 'service', value: 'front' }]}
          port={3000}
          replicas={2}
        />
      </Namespace>
    </Cluster>
  </Provider>
)
