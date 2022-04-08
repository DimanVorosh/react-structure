import {
  makeRequest,
  makeSimpleRequest,
  createRequestStatuses
} from '../../utils/redux-utils'
import { _login, _getCurrentUser } from '../../../api/http/auth'

export const SET_AUTH = createRequestStatuses('SET_AUTH')
export const login = (data, callbackSuccess, callbackError) =>
  makeRequest(SET_AUTH, _login, data, callbackSuccess, callbackError)

export const SET_USER = createRequestStatuses('SET_USER')
export const getCurrentUser = (data, callbackSuccess) =>
  makeRequest(SET_USER, _getCurrentUser, data, callbackSuccess)
