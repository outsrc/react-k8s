import * as React from 'react'
import { ClusterContext } from '../Cluster'
import Panel from '../Panel'
import { INNER, NAMESPACE } from './styles'
import ResourceLabel from '../ResourceLabel'
import { INamespace } from '../../helpers'

interface NamespaceProps {
  namespace: INamespace
  children?: React.ReactNode
}

export const NamespaceContext = React.createContext<INamespace | null>(null)

const createNamespaceResource = (
  namespace: INamespace
): string => `apiVersion: "v1"
kind: "Namespace"
metadata:
  name: "${namespace.name}"`

const Namespace: React.FunctionComponent<NamespaceProps> = ({
  namespace,
  children
}) => {
  const clusterContext = React.useContext(ClusterContext)
  React.useEffect(() => {
    clusterContext?.emitResource(
      `namespace-${namespace.name}.yml`,
      createNamespaceResource(namespace)
    )
  }, [namespace])

  return (
    <NamespaceContext.Provider value={namespace}>
      <Panel
        bottomLeftName={
          <ResourceLabel resource='Namespace' name={namespace.name} />
        }
        panelStyles={NAMESPACE}
        innerPanelStyles={INNER}
      >
        {children}
      </Panel>
    </NamespaceContext.Provider>
  )
}

export default Namespace
