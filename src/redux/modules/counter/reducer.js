import { SET_BARS } from './actions'
import { REQUEST, SUCCESS } from '../../constants/statuses'

const initialState = {
  counter: 0,
  bars: []
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BARS[REQUEST]:
      console.log('request идет')
      return { ...state }

    case SET_BARS[SUCCESS]:
      console.log(action.payload)
      return { ...state }

    default:
      return state
  }
}
