import * as React from 'react'
import { IIngress } from '../../helpers'
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
import DownloadResourceButton from '../DownloadResourceButton'

const Ingress: React.FunctionComponent<IIngress> = ({
  name,
  annotations,
  hosts,
  paths
}) => {
  const { css } = useFela()

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
      bottomRightName={<DownloadResourceButton />}
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
