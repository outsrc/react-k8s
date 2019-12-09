import * as React from 'react'
import { ClusterContext } from '../Cluster'
import Panel from '../Panel'
import {
  INNER,
  DEPLOYMENT,
  LEFT,
  RIGHT,
  REPLICAS,
  IMAGE_NAME,
  LABELS,
  LABEL,
  LABEL_TEXT,
  ENV,
  ENV_TABLE,
  PORT_TEXT,
  PORT,
  CONTENT
} from './styles'
import ResourceLabel from '../ResourceLabel'
import { NamespaceContext } from '../Namespace'
import { IDeployment, INamespace } from '../../helpers'
import { useFela } from 'react-fela'
import Label from '../Label'

const createDeploymentResource = (
  deployment: IDeployment,
  namespace: INamespace
): string => `apiVersion: "v1"
kind: "Deployment"
metadata:
  name: "${deployment.name}"
  namespace: "${namespace.name}"`

const Deployment: React.FunctionComponent<IDeployment> = deployment => {
  const { name, labels, replicas, image, port, env } = deployment
  const { css } = useFela()
  const cluster = React.useContext(ClusterContext)
  const namespace = React.useContext(NamespaceContext)
  React.useEffect(() => {
    if (namespace === null) {
      return
    }

    cluster?.emitResource(
      `deployment-${name}.yml`,
      createDeploymentResource(
        {
          name,
          labels,
          replicas,
          image,
          port,
          env
        },
        namespace
      )
    )
  }, [name])

  return (
    <Panel
      bottomLeftName={<ResourceLabel resource='Deployment' name={name} />}
      panelStyles={DEPLOYMENT}
      innerPanelStyles={INNER}
      contentStyles={CONTENT}
    >
      <div className={css(LEFT)}>
        <div className={css(IMAGE_NAME)}>{image}</div>
        <div className={css(LABELS)}>
          <Label
            style={PORT}
            textStyle={PORT_TEXT}
            label={{ key: 'Port', value: port.toString() }}
          />
          {labels.map(label => (
            <Label
              key={label.key}
              label={label}
              textStyle={LABEL_TEXT}
              style={LABEL}
            />
          ))}
        </div>
        {env.length > 0 && (
          <div className={css(ENV)}>
            <table className={css(ENV_TABLE)}>
              <tbody>
                {env.map(variable => (
                  <tr key={variable.key}>
                    <td>{variable.key}</td>
                    <td>{variable.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className={css(RIGHT)}>
        <div className={css(REPLICAS)}>{replicas}</div>
      </div>
    </Panel>
  )
}

export default Deployment
