import { createAction, handleActions, handleAction, combineActions, Action } from 'redux-actions'

type IChangeHelloPayload = {
  word: string
}

export const CHANGE_HELLO = 'OV/APP/CHANGE_HELLO'

const initialState: ReduxState.IApp = {word: ''}

export default handleActions({
  [CHANGE_HELLO]: (state: ReduxState.IApp, action: Action<IChangeHelloPayload>) => ({
    ...state,
    ...action.payload
  })
}, initialState)

export const changeHello = createAction<IChangeHelloPayload>(CHANGE_HELLO)
