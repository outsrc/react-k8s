import * as React from 'react'
import { IService } from '../../helpers'
import { useFela } from 'react-fela'
import Panel from '../Panel'
import ResourceLabel from '../ResourceLabel'
import Deployment from '../Deployment'
import { CONTENT, INNER, PORT, SERVICE } from './styles'

const Service: React.FunctionComponent<IService> = ({
  name,
  deployment,
  port,
  protocol
}) => {
  const { css } = useFela()

  return (
    <Panel
      panelStyles={SERVICE}
      innerPanelStyles={INNER}
      contentStyles={CONTENT}
      bottomLeftName={<ResourceLabel resource={'Service'} name={name} />}
    >
      <div className={css(PORT)}>
        {port}/{protocol}
      </div>
      <Deployment {...deployment} />
    </Panel>
  )
}

export default Service