import * as React from 'react'
import Panel from '../Panel'
import { CLUSTER } from './styles'
import { useStateManager } from '../hooks'
import { createStateManager } from './state'
import DownloadResourceButton from '../DownloadResourceButton'

interface ClusterProps {
  children?: React.ReactNode
}

interface ClusterContextProps {
  emitResource: (namespace: string, name: string, resource: object) => any
}
export const ClusterContext = React.createContext<ClusterContextProps | null>(
  null
)

const Namespace: React.FunctionComponent<ClusterProps> = ({ children }) => {
  const [, actions] = useStateManager(createStateManager())

  return (
    <ClusterContext.Provider value={{ emitResource: actions.emitResource }}>
      <Panel
        panelStyles={CLUSTER}
        bottomRightName={
          <DownloadResourceButton onClick={actions.downloadResources} />
        }
      >
        {children}
      </Panel>
    </ClusterContext.Provider>
  )
}

export default Namespace
