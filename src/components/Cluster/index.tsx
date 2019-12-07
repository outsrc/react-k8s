import * as React from 'react'
import Panel from '../Panel'
import { CLUSTER } from './styles'

interface ClusterProps {
  children?: React.ReactNode
}

interface ClusterContextProps {
  emitResource: (name: string, resource: string) => any
}
export const ClusterContext = React.createContext<ClusterContextProps | null>(
  null
)

const Namespace: React.FunctionComponent<ClusterProps> = ({ children }) => {
  const emitResource = (name: string, resource: string) => {
    console.log(`Resource Emitted: "${name}":`, resource)
  }

  return (
    <ClusterContext.Provider value={{ emitResource }}>
      <Panel panelStyles={CLUSTER}>{children}</Panel>
    </ClusterContext.Provider>
  )
}

export default Namespace
