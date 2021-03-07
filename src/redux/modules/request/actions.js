import {
  LOADING_START,
  LOADING_END,
  RESET_ERRORS,
  REQUEST_ERROR
} from './constants'
import { createAction } from '@reduxjs/toolkit'

export const startLoading = createAction(LOADING_START)

export const finishLoading = createAction(LOADING_END)

export const resetErrors = createAction(RESET_ERRORS)

export const requestError = createAction(REQUEST_ERROR)
