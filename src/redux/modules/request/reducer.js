import {
  LOADING_START,
  LOADING_END,
  REQUEST_ERROR,
  RESET_ERRORS
} from './constants'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isError: false,
  error: {
    status: '',
    description: ''
  }
}

export const requestReducer = createReducer(initialState, {
  [LOADING_START]: (state) => {
    console.log('loading...')
    state.isLoading = true
    state.error = {
      status: '',
      description: ''
    }
  },
  [LOADING_END]: (state) => {
    state.isLoading = false
  },
  [RESET_ERRORS]: (state) => {
    state = initialState
  },
  [REQUEST_ERROR]: (state, { payload }) => {
    state.isLoading = true
    state.isError = true
    state.error = {
      status: payload.status,
      description: payload.description
    }
  }
})
