import { createAction } from './helpers'
import * as types from './constants/actionTypes'

export const request = createAction(types.REQUEST)
export const requestStart = createAction(types.REQUEST_START)
export const requestFinished = createAction(types.REQUEST_FINISHED)

export const setError = createAction(types.SET_ERROR)
export const setSuccess = createAction(types.SET_SUCCESS)
export const clearAlert = createAction(types.CLEAR_ALERT)

export const loadIdentity = createAction(types.LOAD_IDENTITY)
export const saveIdentity = createAction(types.SAVE_IDENTITY)
export const setIdentity = createAction(types.SET_IDENTITY)
export const clearIdentity = createAction(types.CLEAR_IDENTITY)

export const setTitle = createAction(types.SET_TITLE)