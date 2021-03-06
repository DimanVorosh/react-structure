import {
  createStatusActions,
  createRequestStatuses,
  makeRequest
} from '../../utils/redux-utils'
import { _getBars } from 'api/test'

export const SET_BARS = createRequestStatuses('SET_BARS')
export const setBarsAc = createStatusActions(SET_BARS)
export const getBars = () => makeRequest(setBarsAc, _getBars)
