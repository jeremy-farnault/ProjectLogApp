import { createAction, handleActions } from 'redux-actions'
export const LOAD = 'OV/me/LOAD'

export default handleActions({
  [LOAD]: (state, action) => state
}, {})

export const load = createAction(LOAD)

