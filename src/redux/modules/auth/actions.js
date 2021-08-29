import {
  makeRequest,
  makeSimpleRequest,
  createRequestStatuses
} from 'redux/utils/redux-utils'
import { _login, _getCurrentUser, _logout } from 'api/http/auth'

export const login = (data, callbackSuccess, callbackError) =>
  makeSimpleRequest(_login, data, callbackSuccess, callbackError)

export const SET_USER = createRequestStatuses('SET_USER')
export const getCurrentUser = (data, callbackSuccess) =>
  makeRequest(SET_USER, _getCurrentUser, data, callbackSuccess)

export const logout = (data, callbackSuccess, callbackError) =>
  makeSimpleRequest(_logout, data, callbackSuccess, callbackError)
