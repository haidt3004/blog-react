import { createAction } from './helpers'
import {
  REQUEST,
  REQUEST_START,
  REQUEST_FINISHED,
  SET_ERROR,
  SET_SUCCESS,
  SET_IDENTITY,
  CLEAR_IDENTITY,
  CLEAR_ALERT
} from './constants/actionTypes'

export const request = createAction(REQUEST)
export const requestStart = createAction(REQUEST_START)
export const requestFinished = createAction(REQUEST_FINISHED)

export const setError = createAction(SET_ERROR)
export const setSuccess = createAction(SET_SUCCESS)
export const clearAlert = createAction(CLEAR_ALERT)

export const setIdentity = createAction(SET_IDENTITY)
export const clearIdentity = createAction(CLEAR_IDENTITY)