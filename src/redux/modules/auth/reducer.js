import { createReducer } from '@reduxjs/toolkit'
import { SET_USER } from './actions'
import { SUCCESS, FAILURE } from '../../constants/statuses'

const initialState = {
  user: null,
  authInProgress: true
}

export const authReducer = createReducer(initialState, {
  [SET_USER[SUCCESS]]: (state, action) => {
    state.user = action.payload.data
    state.authInProgress = false
  },

  [SET_USER[FAILURE]]: (state, action) => {
    state.user = null
    state.authInProgress = false
  }
})
