import {
  assoc,
  find,
  lensPath,
  lensProp,
  over,
  prepend,
  propEq,
  set
} from 'ramda'
import { StateManagerProps } from '../hooks'
import fileDownload from 'js-file-download'
import jsYaml from 'js-yaml'

interface EmitAction {
  type: 'EMITTED_RESOURCE'
  namespace: string
  name: string
  resource: object
}

type ActionTypes = EmitAction
interface ResourceDefinition {
  name: string
  resource: object
}
interface State {
  resources: { [key: string]: ResourceDefinition[] }
}

interface Actions {
  emitResource: (namespace: string, name: string, resource: object) => any
  downloadResources: () => any
}

export const createStateManager = (): StateManagerProps<
  State,
  Actions,
  ActionTypes
> => {
  const initialState: State = {
    resources: {}
  }

  const EMITTED_RESOURCE = 'EMITTED_RESOURCE'

  const reducer = (state: State, action: ActionTypes): State => {
    switch (action.type) {
      case EMITTED_RESOURCE: {
        const resource = { name: action.name, resource: action.resource }

        if (!state.resources[action.namespace]) {
          return {
            ...state,
            resources: assoc(action.namespace, [resource], state.resources)
          }
        }

        const namespace = state.resources[action.namespace]
        const index = find(propEq('name', action.name), namespace)
        if (index >= 0) {
          return {
            ...state,
            resources: set(
              lensPath([action.namespace, index]),
              resource,
              state.resources
            )
          }
        }

        return {
          ...state,
          resources: over(
            lensProp(action.namespace),
            prepend(resource),
            state.resources
          )
        }
      }
      default:
        return state
    }
  }

  const createActions = (
    dispatch: (action: ActionTypes) => any,
    getState: () => State
  ): Actions => {
    const emitResource = (namespace: string, name: string, resource: object) =>
      dispatch({ type: EMITTED_RESOURCE, namespace, name, resource })

    const downloadResources = () => {
      const resources = getState().resources

      Object.keys(resources).forEach(resource => {
        const crds = resources[resource]

        const data = crds
          .map(crd => jsYaml.safeDump(crd.resource))
          .join('---\n')
        fileDownload(data, `${resource}.yml`)
      })
    }

    return {
      emitResource,
      downloadResources
    }
  }

  return {
    initialState,
    reducer,
    createActions
  }
}
