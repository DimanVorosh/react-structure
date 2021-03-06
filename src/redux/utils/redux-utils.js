import { REQUEST, SUCCESS, FAILURE } from '../constants/statuses'
import {
  startLoading,
  finishLoading,
  requestError
} from '../modules/request/actions'

export const action = (type, payload = {}) => {
  return { type, payload: { ...payload } }
}

export const createRequestStatuses = (reqNamespace) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((reqStatus, reqType) => {
    reqStatus[reqType] = `${reqNamespace}_${reqType}`
    return reqStatus
  }, {})
}

export const createStatusActions = (type) => {
  return {
    request: () => action(type[REQUEST]),
    success: (response) => action(type[SUCCESS], response),
    failure: (error) => action(type[FAILURE], error)
  }
}

export const makeRequest = (
  action,
  apiReq,
  payload = {},
  callbackSuccess = () => {},
  callbackError = () => {}
) => {
  return async (dispatch) => {
    dispatch(startLoading())
    dispatch(action.request())
    try {
      const resp = await apiReq(payload)
      dispatch(action.success(resp.data))
      callbackSuccess()
      dispatch(finishLoading())
    } catch (error) {
      dispatch(action.failure(error))
      callbackError()
      dispatch(requestError(error))
    }
  }
}
