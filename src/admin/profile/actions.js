import { createAsyncAction } from '../../common/helpers'
import { LOAD_PROFILE, SAVE_PROFILE } from './constants/actionTypes'

export const loadProfile = createAsyncAction(LOAD_PROFILE)
export const saveProfile = createAsyncAction(SAVE_PROFILE)
