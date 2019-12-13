import * as React from 'react'

export type Reducer<State, ActionTypes> = (
  state: State,
  action: ActionTypes
) => State

export type StateManagerProps<State, Actions, ActionTypes> = {
  initialState: State
  reducer: Reducer<State, ActionTypes>
  createActions: (
    dispatch: (action: ActionTypes) => any,
    getState: () => State
  ) => Actions
}

export type OfflineStateManagerProps<State, Actions> = [() => State, Actions]

export const useStateManager = <State, Actions, ActionTypes>({
  initialState,
  reducer,
  createActions
}: StateManagerProps<State, Actions, ActionTypes>): [State, Actions] => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const actions = createActions(dispatch, () => state)
  return [state, actions]
}

export const offlineStateManager = <State, Actions, ActionTypes>({
  initialState,
  reducer,
  createActions
}: StateManagerProps<State, Actions, ActionTypes>): OfflineStateManagerProps<
  State,
  Actions
> => {
  let state = initialState

  const getState = () => state
  const dispatch = (payload: ActionTypes) => {
    state = reducer(state, payload)
  }
  const actions = createActions(dispatch, getState)

  return [getState, actions]
}

// export const useInterval = (callback: () => any, delay: number) => {
//   const savedCallback = React.useRef()
//
//   React.useEffect(() => {
//     savedCallback.current = callback
//   })
//
//   React.useEffect(() => {
//     function tick () {
//       savedCallback.current && savedCallback.current()
//     }
//
//     if (delay !== null) {
//       const id = setInterval(tick, delay)
//
//       return () => clearInterval(id)
//     }
//   }, [delay])
// }
//
// export const useTimeout = (callback: () => mixed, delay: number | null) => {
//   const savedCallback = useRef()
//
//   useEffect(() => {
//     savedCallback.current = callback
//   })
//
//   useEffect(() => {
//     function tick () {
//       savedCallback.current && savedCallback.current()
//     }
//
//     if (delay !== null) {
//       const id = setTimeout(tick, delay)
//
//       return () => clearTimeout(id)
//     }
//   }, [delay])
// }
