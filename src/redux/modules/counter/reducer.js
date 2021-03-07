import { SET_BARS } from './actions'
import { REQUEST, SUCCESS } from '../../constants/statuses'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  bars: []
}

export const counterReducer = createReducer(initialState, {
  [SET_BARS[REQUEST]]: (state) => {
    console.log('реквест идет в сторе')
  },
  [SET_BARS[SUCCESS]]: (state, action) => {
    console.log(action.payload)
    console.log('успешный запрос в сторе')
  }
})
