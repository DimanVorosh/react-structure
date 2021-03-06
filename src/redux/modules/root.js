import { combineReducers } from 'redux'
import { counterReducer as counter } from './counter/reducer'
import { requestReducer as request } from './request/reducer'

export default combineReducers({
  counter,
  request
})
