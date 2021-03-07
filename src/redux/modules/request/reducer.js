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

// export const {
//   startLoading,
//   finishLoading,
//   resetErrors,
//   requestError
// } = questionSlice.actions

// export const requestReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOADING_START:
//       return {
//         ...state,
//         isLoading: true,
//         error: {
//           status: '',
//           description: ''
//         }
//       }

//     case RESET_ERRORS:
//       return {
//         ...state,
//         ...initialState
//       }

//     case LOADING_END:
//       return {
//         ...state,
//         isLoading: false
//       }

//     case REQUEST_ERROR:
//       return {
//         isLoading: false,
//         isError: true,
//         error: {
//           status: action.error.status,
//           description: action.error.description
//         }
//       }

//     default:
//       return state
//   }
// }
