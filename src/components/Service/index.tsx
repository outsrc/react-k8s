import * as React from 'react'
import { INamespace, IService, toK8sLabels } from '../../helpers'
import { useFela } from 'react-fela'
import Panel from '../Panel'
import Deployment from '../Deployment'
import { CONTENT, INNER, PORT, SERVICE } from './styles'
import { ClusterContext } from '../Cluster'
import { NamespaceContext } from '../Namespace'

const createServiceResource = (
  service: IService,
  namespace: INamespace
): object => ({
  apiVersion: 'v1',
  kind: 'Service',
  metadata: {
    name: `service-${service.deployment.name}`,
    namespace: namespace.name,
    labels: toK8sLabels(service.deployment.labels)
  },
  spec: {
    selector: toK8sLabels(service.deployment.labels),
    ports: [
      {
        port: service.port,
        protocol: service.protocol,
        targetPort: service.deployment.port
      }
    ]
  }
})

const Service: React.FunctionComponent<IService> = ({
  deployment,
  port,
  protocol
}) => {
  const { css } = useFela()
  const cluster = React.useContext(ClusterContext)
  const namespace = React.useContext(NamespaceContext)
  React.useEffect(() => {
    if (namespace === null) {
      return
    }

    cluster?.emitResource(
      namespace.name,
      `service-${deployment.name}`,
      createServiceResource(
        {
          deployment,
          port,
          protocol
        },
        namespace
      )
    )
  }, [deployment.name])

  return (
    <Panel
      panelStyles={SERVICE}
      innerPanelStyles={INNER}
      contentStyles={CONTENT}
    >
      <div className={css(PORT)}>
        {port}/{protocol}
      </div>
      <Deployment {...deployment} />
    </Panel>
  )
}

export default Service
