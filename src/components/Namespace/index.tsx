import * as React from 'react'
import { ClusterContext } from '../Cluster'
import Panel from '../Panel'
import { NAMESPACE } from './styles'

interface NamespaceProps {
  name: string
  children: React.ReactNode
}

export const NamespaceContext = React.createContext<string>('')

const createNamespaceResource = (name: string): string => `apiVersion: "v1"
kind: "Namespace"
metadata:
  name: "${name}"`

const Namespace: React.FunctionComponent<NamespaceProps> = ({
  name,
  children
}) => {
  const clusterContext = React.useContext(ClusterContext)
  React.useEffect(() => {
    clusterContext?.emitResource(
      `namespace-${name}.yml`,
      createNamespaceResource(name)
    )
  }, [name])

  return (
    <NamespaceContext.Provider value={name}>
      <Panel bottomLeftName={`NS: ${name}`} panelStyles={NAMESPACE}>
        {children}
      </Panel>
    </NamespaceContext.Provider>
  )
}

export default Namespace
