import * as React from 'react'
import { IIngress, INamespace } from '../../helpers'
import { useFela } from 'react-fela'
import Panel from '../Panel'
import ResourceLabel from '../ResourceLabel'
import {
  ANNOTATION,
  ANNOTATION_TEXT,
  ANNOTATIONS,
  HOSTS,
  INGRESS,
  INGRESS_TEXT,
  INNER,
  PATH,
  PATH_LEFT,
  PATH_RIGHT,
  PATHS
} from './styles'
import Label from '../Label'
import Service from '../Service'
import { ClusterContext } from '../Cluster'
import { NamespaceContext } from '../Namespace'
import { assoc } from 'ramda'

const createIngressResource = (
  ingress: IIngress,
  namespace: INamespace
): object => ({
  apiVersion: 'extensions/v1beta1',
  kind: 'Ingress',
  metadata: {
    name: `${ingress.name}-ingress`,
    namespace: namespace.name,
    annotations: ingress.annotations.reduce(
      (acc, annotation) => assoc(annotation.key, annotation.value, acc),
      {}
    )
  },
  spec: {
    tls: [{ secretName: `${ingress.name}-tls`, hosts: ingress.hosts }],
    rules: ingress.hosts.map(host => ({
      host,
      http: {
        paths: ingress.paths.map(path => ({
          path: path.path,
          backend: {
            serviceName: `service-${path.backend.deployment.name}`,
            servicePort: path.backend.port
          }
        }))
      }
    }))
  }
})

// hosts: [
//   "outsrc.dev"
//   ],
// rules: [
//   {
//     host: "outsrc.dev",
//   http: {
//   paths: [
//   { path: "/" ,
//   backend: {
//   serviceName: "outsrc-front-service",
// servicePort: 3000 } },
//   {
//     path: "/api",
//     backend: {
//       serviceName: "outsrc-back-service",
//       servicePort: 3000
//     }
//   }
// ]}])

const Ingress: React.FunctionComponent<IIngress> = ({
  name,
  annotations,
  hosts,
  paths
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
      name,
      createIngressResource(
        {
          name,
          annotations,
          hosts,
          paths
        },
        namespace
      )
    )
  }, [name])

  return (
    <Panel
      panelStyles={INGRESS}
      innerPanelStyles={INNER}
      bottomLeftName={
        <ResourceLabel
          textStyle={INGRESS_TEXT}
          resource={'Ingress'}
          name={name}
        />
      }
    >
      <div className={css(HOSTS)}>{hosts.join(', ')}</div>
      <div className={css(ANNOTATIONS)}>
        {annotations.map(annotation => (
          <Label
            key={annotation.key}
            label={annotation}
            textStyle={ANNOTATION_TEXT}
            style={ANNOTATION}
          />
        ))}
      </div>
      <div className={css(PATHS)}>
        {paths.map((path, index) => (
          <div key={index} className={css(PATH)}>
            <div className={css(PATH_LEFT)}>{path.path}</div>
            <div className={css(PATH_RIGHT)}>
              <Service {...path.backend} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export default Ingress
